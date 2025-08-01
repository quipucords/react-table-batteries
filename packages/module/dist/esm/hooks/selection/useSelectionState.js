import React from 'react';
/**
 * Provides the "source of truth" state for the selection feature.
 * - Used internally by useTableState
 * - NOTE: usePersistentState is not used here because in order to work correctly,
 *   selection state cannot be persisted. The `selectedItems` array we get from `useSelectionDerivedState`
 *   is based on a cache of the API items that have been seen in the current session.
 *   if we need to restore selection state on a page reload, we no longer have all the selected item data
 *   in memory. We just use a plain React.useState here and if we have selected items in state we'll
 *   always have those item objects cached.
 * @see PersistTarget
 */
export const useSelectionState = (args) => {
    var _a;
    const initialSelectedItemIds = ((_a = args.selection) === null || _a === void 0 ? void 0 : _a.initialSelectedItemIds) || [];
    const [selectedItemIds, setSelectedItemIds] = React.useState(initialSelectedItemIds);
    return { selectedItemIds, setSelectedItemIds };
};
//# sourceMappingURL=useSelectionState.js.map