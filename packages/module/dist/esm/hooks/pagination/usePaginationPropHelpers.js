import { usePaginationEffects } from './usePaginationEffects';
/**
 * Returns derived state and prop helpers for the pagination feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const usePaginationPropHelpers = (args) => {
    const { totalItemCount, pagination: { pageNumber, itemsPerPage, setPageNumber, setItemsPerPage } } = args;
    usePaginationEffects(args);
    /**
     * Props for the PF Pagination component
     */
    const paginationProps = {
        itemCount: totalItemCount,
        perPage: itemsPerPage,
        page: pageNumber,
        onSetPage: (_event, pageNumber) => setPageNumber === null || setPageNumber === void 0 ? void 0 : setPageNumber(pageNumber),
        onPerPageSelect: (_event, perPage) => {
            setPageNumber === null || setPageNumber === void 0 ? void 0 : setPageNumber(1);
            setItemsPerPage === null || setItemsPerPage === void 0 ? void 0 : setItemsPerPage(perPage);
        }
    };
    /**
     * Props for the PF ToolbarItem component which contains the Pagination component
     */
    const paginationToolbarItemProps = {
        variant: 'pagination',
        align: { default: 'alignRight' }
    };
    return { paginationProps, paginationToolbarItemProps };
};
//# sourceMappingURL=usePaginationPropHelpers.js.map