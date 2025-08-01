import { useFilterState } from './filtering';
import { useSortState } from './sorting';
import { usePaginationState } from './pagination';
import { useActiveItemState } from './active-item';
import { useExpansionState } from './expansion';
import { useSelectionState } from './selection';
import { mergeArgs } from '../utils';
/**
 * Provides the "source of truth" state for all table features.
 * - State can be persisted in one or more configurable storage targets, either the same for the entire table or different targets per feature.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 * - If you aren't using server-side filtering/sorting/pagination, call this via the shorthand hook useClientTableBatteries.
 * - If you are using server-side filtering/sorting/pagination, call this first before fetching your API data and then calling useTablePropHelpers.
 * @param args
 * @returns
 */
export const useTableState = (args) => {
    const state = {
        filter: useFilterState(args),
        sort: useSortState(args),
        pagination: usePaginationState(args),
        selection: useSelectionState(args),
        expansion: useExpansionState(args),
        activeItem: useActiveItemState(args)
    };
    const { filter: { filterValues }, sort: { activeSort }, pagination: { pageNumber, itemsPerPage } } = state;
    const cacheKey = JSON.stringify({ filterValues, activeSort, pageNumber, itemsPerPage });
    return Object.assign(Object.assign({}, mergeArgs(args, state)), { cacheKey });
};
//# sourceMappingURL=useTableState.js.map