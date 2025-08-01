import { useActiveItemDerivedState } from './useActiveItemDerivedState';
import { useActiveItemEffects } from './useActiveItemEffects';
import { mergeArgs } from '../../utils';
/**
 * Given "source of truth" state for the active item feature, returns derived state and `propHelpers`.
 * - Used internally by useTablePropHelpers
 * - Also triggers side effects to prevent invalid state
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useActiveItemPropHelpers = (args) => {
    const activeItemDerivedState = useActiveItemDerivedState(args);
    const { isActiveItem, setActiveItem, clearActiveItem } = activeItemDerivedState;
    useActiveItemEffects(mergeArgs(args, { activeItem: activeItemDerivedState }));
    /**
     * Returns props for a clickable Tr in a table with the active item feature enabled. Sets or clears the active item when clicked.
     */
    const getActiveItemTrProps = ({ item }) => ({
        isSelectable: true,
        isClickable: true,
        isRowSelected: item && isActiveItem(item),
        onRowClick: () => {
            if (item && !isActiveItem(item)) {
                setActiveItem(item);
            }
            else {
                clearActiveItem();
            }
        }
    });
    return { activeItemDerivedState, getActiveItemTrProps };
};
//# sourceMappingURL=useActiveItemPropHelpers.js.map