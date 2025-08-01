import { useClientFilterDerivedState } from './filtering';
import { useClientSortDerivedState } from './sorting';
import { useClientPaginationDerivedState } from './pagination';
/**
 * Returns table-level "derived state" (the results of local/client-computed filtering/sorting/pagination)
 * - Used internally by the shorthand hook useClientTableBatteries.
 * - Takes "source of truth" state for all features and additional args.
 * @see useClientTableBatteries
 */
export const useClientTableDerivedState = (args) => {
    const { items } = args;
    const { filteredItems } = useClientFilterDerivedState(Object.assign(Object.assign({}, args), { items }));
    const { sortedItems } = useClientSortDerivedState(Object.assign(Object.assign({}, args), { items: filteredItems }));
    const { currentPageItems } = useClientPaginationDerivedState(Object.assign(Object.assign({}, args), { items: sortedItems }));
    return {
        totalItemCount: filteredItems.length,
        currentPageItems
    };
};
//# sourceMappingURL=useClientTableDerivedState.js.map