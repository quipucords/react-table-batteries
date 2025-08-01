/**
 * Given the "source of truth" state for the sort feature and additional arguments, returns "derived state" values and convenience functions.
 * - For local/client-computed tables only. Performs the actual sorting logic, which is done on the server for server-computed tables.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useClientSortDerivedState = (args) => {
    const { items, sort: { getSortValues, activeSort } } = args;
    if (!getSortValues || !activeSort) {
        return { sortedItems: items };
    }
    let sortedItems = items;
    sortedItems = [...items].sort((a, b) => {
        let aValue = getSortValues(a)[activeSort.columnKey];
        let bValue = getSortValues(b)[activeSort.columnKey];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            aValue = aValue.replace(/ +/g, '');
            bValue = bValue.replace(/ +/g, '');
            const aSortResult = aValue.localeCompare(bValue);
            const bSortResult = bValue.localeCompare(aValue);
            return activeSort.direction === 'asc' ? aSortResult : bSortResult;
        }
        else if (typeof aValue === 'number' && typeof bValue === 'number') {
            return activeSort.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
        else {
            if (aValue > bValue) {
                return activeSort.direction === 'asc' ? -1 : 1;
            }
            if (aValue < bValue) {
                return activeSort.direction === 'asc' ? -1 : 1;
            }
        }
        return 0;
    });
    return { sortedItems };
};
//# sourceMappingURL=useClientSortDerivedState.js.map