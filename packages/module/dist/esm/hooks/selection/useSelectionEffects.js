import React from 'react';
export const useSelectionEffects = (args) => {
    const { selection: { isEnabled, isItemSelectable = () => true, selectedItems, setSelectedItems } } = args;
    // If isItemSelectable changes and a selected item is no longer selectable, deselect it
    React.useEffect(() => {
        if (isEnabled && isItemSelectable && !selectedItems.every(isItemSelectable)) {
            setSelectedItems(selectedItems.filter(isItemSelectable));
        }
    }, [isEnabled, isItemSelectable, selectedItems, setSelectedItems]);
};
//# sourceMappingURL=useSelectionEffects.js.map