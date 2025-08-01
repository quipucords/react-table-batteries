import { SortState, SortStateArgs } from './useSortState';
/**
 * Args for useClientSortDerivedState
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useClientTableDerivedState (UseClientTableDerivedStateArgs)
 * @see TableState
 * @see UseClientTableDerivedStateArgs
 */
export interface UseClientSortDerivedStateArgs<TItem, TSortableColumnKey extends string> {
    /**
     * The API data items before sorting
     */
    items: TItem[];
    /**
     * Feature-specific args: A subset of the `TableState` object's `sort` property with the state itself and relevant state args
     */
    sort: SortState<TSortableColumnKey> & Pick<SortStateArgs<TItem, TSortableColumnKey>, 'getSortValues'>;
}
/**
 * Given the "source of truth" state for the sort feature and additional arguments, returns "derived state" values and convenience functions.
 * - For local/client-computed tables only. Performs the actual sorting logic, which is done on the server for server-computed tables.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export declare const useClientSortDerivedState: <TItem, TSortableColumnKey extends string>(args: UseClientSortDerivedStateArgs<TItem, TSortableColumnKey>) => {
    sortedItems: TItem[];
};
//# sourceMappingURL=useClientSortDerivedState.d.ts.map