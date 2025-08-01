import { usePersistentState } from '../generic/usePersistentState';
/**
 * Provides the "source of truth" state for the pagination feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `pagination` object arg to disable the pagination feature.
 * @see PersistTarget
 */
export const usePaginationState = (args) => {
    var _a, _b, _c;
    const { persistenceKeyPrefix } = args;
    const persistTo = ((_a = args.pagination) === null || _a === void 0 ? void 0 : _a.persistTo) || args.persistTo || 'state';
    const initialItemsPerPage = ((_b = args.pagination) === null || _b === void 0 ? void 0 : _b.initialItemsPerPage) || 10;
    const defaultValue = {
        pageNumber: 1,
        itemsPerPage: initialItemsPerPage
    };
    // We won't need to pass the latter two type params here if TS adds support for partial inference.
    // See https://github.com/konveyor/tackle2-ui/issues/1456
    const [paginationState, setPaginationState] = usePersistentState(Object.assign({ isEnabled: ((_c = args.pagination) === null || _c === void 0 ? void 0 : _c.isEnabled) || false, defaultValue,
        persistenceKeyPrefix }, (persistTo === 'urlParams'
        ? {
            persistTo,
            keys: ['pageNumber', 'itemsPerPage'],
            serialize: (state) => {
                const { pageNumber, itemsPerPage } = state || {};
                return {
                    pageNumber: pageNumber ? String(pageNumber) : undefined,
                    itemsPerPage: itemsPerPage ? String(itemsPerPage) : undefined
                };
            },
            deserialize: (urlParams) => {
                const { pageNumber, itemsPerPage } = urlParams || {};
                return pageNumber && itemsPerPage
                    ? {
                        pageNumber: parseInt(pageNumber),
                        itemsPerPage: parseInt(itemsPerPage)
                    }
                    : defaultValue;
            }
        }
        : persistTo === 'localStorage' || persistTo === 'sessionStorage'
            ? {
                persistTo,
                key: 'pagination'
            }
            : { persistTo })));
    const { pageNumber, itemsPerPage } = paginationState || defaultValue;
    const setPageNumber = (num) => setPaginationState({
        pageNumber: num >= 1 ? num : 1,
        itemsPerPage: (paginationState === null || paginationState === void 0 ? void 0 : paginationState.itemsPerPage) || initialItemsPerPage
    });
    const setItemsPerPage = (itemsPerPage) => setPaginationState({
        pageNumber: (paginationState === null || paginationState === void 0 ? void 0 : paginationState.pageNumber) || 1,
        itemsPerPage
    });
    return { pageNumber, setPageNumber, itemsPerPage, setItemsPerPage };
};
//# sourceMappingURL=usePaginationState.js.map