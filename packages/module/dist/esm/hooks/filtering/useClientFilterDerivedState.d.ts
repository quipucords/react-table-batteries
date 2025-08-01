import { FilterState, FilterStateArgs } from './useFilterState';
/**
 * Args for useClientFilterDerivedState
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useClientTableDerivedState (UseClientTableDerivedStateArgs)
 * @see TableState
 * @see UseClientTableDerivedStateArgs
 */
export interface UseClientFilterDerivedStateArgs<TItem, TFilterCategoryKey extends string> {
    /**
     * The API data items before filtering
     */
    items: TItem[];
    /**
     * Feature-specific args: A subset of the `TableState` object's `filter` property with the state itself and relevant state args
     */
    filter: FilterState<TFilterCategoryKey> & Pick<FilterStateArgs<TItem, TFilterCategoryKey>, 'filterCategories'>;
}
/**
 * Given the "source of truth" state for the filter feature and additional arguments, returns "derived state" values and convenience functions.
 * - For local/client-computed tables only. Performs the actual filtering logic, which is done on the server for server-computed tables.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export declare const useClientFilterDerivedState: <TItem, TFilterCategoryKey extends string>(args: UseClientFilterDerivedStateArgs<TItem, TFilterCategoryKey>) => {
    filteredItems: TItem[];
};
//# sourceMappingURL=useClientFilterDerivedState.d.ts.map