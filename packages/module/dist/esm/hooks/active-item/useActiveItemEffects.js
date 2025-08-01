import * as React from 'react';
/**
 * Registers side effects necessary to prevent invalid state related to the active item feature.
 * - Used internally by useActiveItemPropHelpers as part of useTablePropHelpers
 * - The effect: If some state change (e.g. refetch, pagination interaction) causes the active item to disappear,
 *   remove its id from state so the drawer won't automatically reopen if the item comes back.
 */
export const useActiveItemEffects = (args) => {
    const { isLoading, activeItem: { isEnabled, activeItemId, activeItem, clearActiveItem } } = args;
    React.useEffect(() => {
        if (isEnabled && !isLoading && activeItemId && !activeItem) {
            clearActiveItem === null || clearActiveItem === void 0 ? void 0 : clearActiveItem();
        }
    }, [isEnabled, activeItem, activeItemId, clearActiveItem, isLoading]);
};
//# sourceMappingURL=useActiveItemEffects.js.map