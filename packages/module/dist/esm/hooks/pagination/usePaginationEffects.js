import * as React from 'react';
/**
 * Registers side effects necessary to prevent invalid state related to the pagination feature.
 * - Used internally by usePaginationPropHelpers as part of useTablePropHelpers
 * - The effect: When API data updates, if there are fewer total items and the current page no longer exists
 *   (e.g. you were on page 11 and now the last page is 10), move to the last page of data.
 */
export const usePaginationEffects = (args) => {
    const { totalItemCount, isLoading, pagination: { pageNumber, itemsPerPage } } = args;
    // When items are removed, make sure the current page still exists
    const lastPageNumber = Math.max(Math.ceil(totalItemCount / itemsPerPage), 1);
    React.useEffect(() => {
        var _a, _b;
        if (((_a = args.pagination) === null || _a === void 0 ? void 0 : _a.isEnabled) && pageNumber > lastPageNumber && !isLoading) {
            (_b = args.pagination) === null || _b === void 0 ? void 0 : _b.setPageNumber(lastPageNumber);
        }
    }, [args.pagination, isLoading, lastPageNumber, pageNumber]);
};
//# sourceMappingURL=usePaginationEffects.js.map