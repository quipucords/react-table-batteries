import * as React from 'react';
/**
 * Given the "source of truth" state for the selection feature and additional arguments, returns "derived state" values and convenience functions.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 *
 * NOTE: Unlike `useClient[Filter|Sort|Pagination]DerivedState`, this is not named `useClientSelectionDerivedState` because it
 * is always local/client-computed, and it is still used when working with server-computed tables
 * (it's not specific to client-only-computed tables like the other `useClient*DerivedState` functions are).
 */
export const useSelectionDerivedState = (args) => {
    const { idProperty, currentPageItems, totalItemCount, items, selection: { selectedItemIds, setSelectedItemIds, isItemSelectable = () => true } } = args;
    // We memoize any item objects we've seen that match selectedItemIds, even if they are no longer in currentPageItems.
    const selectedItemCacheRef = React.useRef({});
    const selectedItems = React.useMemo(() => {
        (items || currentPageItems).forEach((item) => {
            const itemId = item[idProperty];
            if (selectedItemCacheRef.current[itemId] !== item && selectedItemIds.includes(itemId)) {
                selectedItemCacheRef.current[itemId] = item;
            }
        });
        return selectedItemIds.map((id) => selectedItemCacheRef.current[id]).filter(Boolean);
    }, [currentPageItems, items, idProperty, selectedItemIds]);
    const isItemSelected = (item) => selectedItemIds.includes(item[idProperty]);
    return {
        selectedItems,
        isItemSelected,
        allSelected: selectedItemIds.length === totalItemCount,
        pageSelected: currentPageItems.length === selectedItemIds.length &&
            currentPageItems.every((item) => selectedItemIds.includes(item[idProperty])),
        selectItem: (item, isSelecting = true) => {
            if (isSelecting && !isItemSelected(item) && isItemSelectable(item)) {
                setSelectedItemIds((selected) => [...selected, item[idProperty]]);
            }
            else if (!isSelecting) {
                setSelectedItemIds((selected) => selected.filter((id) => id !== item[idProperty]));
            }
        },
        selectItems: (items, isSelecting = items.some(isItemSelected)) => {
            const selectingItems = items.filter(isItemSelectable);
            const selectingItemIds = selectingItems.map((item) => item[idProperty]);
            if (isSelecting && selectingItemIds.length > 0) {
                setSelectedItemIds((selected) => [
                    ...selected.filter((id) => !selectingItemIds.includes(id)),
                    ...selectingItemIds
                ]);
            }
            else if (!isSelecting) {
                setSelectedItemIds((selected) => selected.filter((id) => !items.find((item) => item[idProperty] === id)));
            }
        },
        selectAll: () => {
            if (!items) {
                // eslint-disable-next-line no-console
                console.warn('selectAll called without `items` array argument present - select all only works for client-paginated tables.');
                return;
            }
            setSelectedItemIds(items.filter(isItemSelectable).map((item) => item[idProperty]));
        },
        selectPage: (selecting = true) => {
            if (selecting) {
                setSelectedItemIds(currentPageItems.filter(isItemSelectable).map((item) => item[idProperty]));
            }
            else {
                setSelectedItemIds([]);
            }
        },
        selectNone: () => {
            setSelectedItemIds([]);
        },
        setSelectedItems: (items) => {
            setSelectedItemIds(items.map((item) => item[idProperty]));
        }
    };
};
//# sourceMappingURL=useSelectionDerivedState.js.map