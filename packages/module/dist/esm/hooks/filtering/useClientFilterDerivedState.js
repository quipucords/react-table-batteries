import { getFilterLogicOperator } from '../../tackle2-ui-legacy/components/FilterToolbar';
import { objectKeys } from '../../utils';
/**
 * Given the "source of truth" state for the filter feature and additional arguments, returns "derived state" values and convenience functions.
 * - For local/client-computed tables only. Performs the actual filtering logic, which is done on the server for server-computed tables.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useClientFilterDerivedState = (args) => {
    const { items, filter: { filterCategories, filterValues } } = args;
    const filteredItems = items.filter((item) => objectKeys(filterValues).every((categoryKey) => {
        const values = filterValues[categoryKey];
        if (!values || values.length === 0) {
            return true;
        }
        const filterCategory = filterCategories.find((category) => category.key === categoryKey);
        // TODO resolve this issue with `any`
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let itemValue = item[categoryKey];
        if (filterCategory === null || filterCategory === void 0 ? void 0 : filterCategory.getItemValue) {
            itemValue = filterCategory.getItemValue(item);
        }
        const logicOperator = getFilterLogicOperator(filterCategory);
        return values[logicOperator === 'AND' ? 'every' : 'some']((filterValue) => {
            if (!itemValue) {
                return false;
            }
            const lowerCaseItemValue = String(itemValue).toLowerCase();
            const lowerCaseFilterValue = String(filterValue).toLowerCase();
            return lowerCaseItemValue.indexOf(lowerCaseFilterValue) !== -1;
        });
    }));
    return { filteredItems };
};
//# sourceMappingURL=useClientFilterDerivedState.js.map