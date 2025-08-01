import { FeatureStateCommonArgs, TablePersistenceArgs } from '../../types';
/**
 * The currently applied sort parameters
 */
export interface ActiveSort<TSortableColumnKey extends string> {
    /**
     * The identifier for the currently sorted column (`columnKey` values come from the keys of the `columnNames` object passed to useTableState)
     */
    columnKey: TSortableColumnKey;
    /**
     * The direction of the currently applied sort (ascending or descending)
     */
    direction: 'asc' | 'desc';
}
/**
 * Feature-specific args for useSortState
 * - Used as the `sort` sub-object in args of both useSortState and useTableState as a whole
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see UseTableStateArgs
 * @see TableBatteries
 */
export interface SortStateArgs<TItem, TSortableColumnKey extends string> extends FeatureStateCommonArgs {
    /**
     * The `columnKey` values (keys of the `columnNames` object passed to useTableState) corresponding to columns with sorting enabled
     */
    sortableColumns: TSortableColumnKey[];
    /**
     * The sort column and direction that should be applied by default when the table first loads
     */
    initialSort?: ActiveSort<TSortableColumnKey> | null;
    /**
     * A callback function to return, for a given API data item, a record of sortable primitives for that item's sortable columns
     * - The record maps:
     *   - from `columnKey` values (the keys of the `columnNames` object passed to useTableState)
     *   - to easily sorted primitive values (string | number | boolean) for this item's value in that column
     * Added here even though it's not used in useSortState so args can be passed all at once. Actually used only in useClientSortDerivedState.
     * @see useClientSortDerivedState
     */
    getSortValues?: (item: TItem) => Record<TSortableColumnKey, string | number | boolean>;
}
/**
 * The "source of truth" state for the sort feature.
 * - Included in the `TableState` object returned by useTableState under the `sort` sub-object (combined with args above).
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see TableState
 * @see TableBatteries
 */
export interface SortState<TSortableColumnKey extends string> {
    /**
     * The currently applied sort column and direction
     */
    activeSort: ActiveSort<TSortableColumnKey> | null;
    /**
     * Updates the currently applied sort column and direction
     */
    setActiveSort: (sort: ActiveSort<TSortableColumnKey>) => void;
}
/**
 * Provides the "source of truth" state for the sort feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `sort` object arg to disable the sorting feature.
 * @see PersistTarget
 */
export declare const useSortState: <TItem, TSortableColumnKey extends string, TPersistenceKeyPrefix extends string = string>(args: {
    sort?: SortStateArgs<TItem, TSortableColumnKey>;
} & TablePersistenceArgs<TPersistenceKeyPrefix>) => SortState<TSortableColumnKey>;
//# sourceMappingURL=useSortState.d.ts.map