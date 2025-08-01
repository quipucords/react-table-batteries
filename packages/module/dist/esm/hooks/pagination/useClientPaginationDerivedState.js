/**
 * Given the "source of truth" state for the pagination feature and additional arguments, returns "derived state" values and convenience functions.
 * - For local/client-computed tables only. Performs the actual pagination logic, which is done on the server for server-computed tables.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useClientPaginationDerivedState = (args) => {
    const { items, pagination: { pageNumber, itemsPerPage } } = args;
    const pageStartIndex = (pageNumber - 1) * itemsPerPage;
    const currentPageItems = items.slice(pageStartIndex, pageStartIndex + itemsPerPage);
    return { currentPageItems: args.pagination ? currentPageItems : items };
};
//# sourceMappingURL=useClientPaginationDerivedState.js.map