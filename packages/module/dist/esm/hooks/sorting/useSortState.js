import { usePersistentState } from '../generic/usePersistentState';
/**
 * Provides the "source of truth" state for the sort feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `sort` object arg to disable the sorting feature.
 * @see PersistTarget
 */
export const useSortState = (args) => {
    var _a, _b, _c;
    const { persistenceKeyPrefix } = args;
    const persistTo = ((_a = args.sort) === null || _a === void 0 ? void 0 : _a.persistTo) || args.persistTo || 'state';
    const sortableColumns = ((_b = args.sort) === null || _b === void 0 ? void 0 : _b.sortableColumns) || [];
    const initialSort = sortableColumns[0]
        ? { columnKey: sortableColumns[0], direction: 'asc' }
        : null;
    // We won't need to pass the latter two type params here if TS adds support for partial inference.
    // See https://github.com/konveyor/tackle2-ui/issues/1456
    const [activeSort, setActiveSort] = usePersistentState(Object.assign({ isEnabled: ((_c = args.sort) === null || _c === void 0 ? void 0 : _c.isEnabled) || false, defaultValue: initialSort, persistenceKeyPrefix }, (persistTo === 'urlParams'
        ? {
            persistTo,
            keys: ['sortColumn', 'sortDirection'],
            serialize: (activeSort) => ({
                sortColumn: (activeSort === null || activeSort === void 0 ? void 0 : activeSort.columnKey) || null,
                sortDirection: (activeSort === null || activeSort === void 0 ? void 0 : activeSort.direction) || null
            }),
            deserialize: (urlParams) => urlParams.sortColumn && urlParams.sortDirection
                ? {
                    columnKey: urlParams.sortColumn,
                    direction: urlParams.sortDirection
                }
                : null
        }
        : persistTo === 'localStorage' || persistTo === 'sessionStorage'
            ? {
                persistTo,
                key: 'sort'
            }
            : { persistTo })));
    return { activeSort, setActiveSort };
};
//# sourceMappingURL=useSortState.js.map