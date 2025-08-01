import { FeatureStateCommonArgs, TablePersistenceArgs } from '../../types';
/**
 * The currently applied pagination parameters
 */
export interface ActivePagination {
    /**
     * The current page number on the user's pagination controls (counting from 1)
     */
    pageNumber: number;
    /**
     * The current "items per page" setting on the user's pagination controls (defaults to 10)
     */
    itemsPerPage: number;
}
/**
 * Feature-specific args for usePaginationState
 * - Used as the `pagination` sub-object in args of both usePaginationState and useTableState as a whole
 * - Properties here are included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see TableBatteries
 */
export interface PaginationStateArgs extends FeatureStateCommonArgs {
    /**
     * The initial value of the "items per page" setting on the user's pagination controls (defaults to 10)
     */
    initialItemsPerPage?: number;
}
/**
 * The "source of truth" state for the pagination feature.
 * - Included in the `TableState` object returned by useTableState under the `pagination` sub-object (combined with args above).
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see TableState
 * @see TableBatteries
 */
export interface PaginationState extends ActivePagination {
    /**
     * Updates the current page number on the user's pagination controls (counting from 1)
     */
    setPageNumber: (pageNumber: number) => void;
    /**
     * Updates the "items per page" setting on the user's pagination controls (defaults to 10)
     */
    setItemsPerPage: (numItems: number) => void;
}
/**
 * Provides the "source of truth" state for the pagination feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `pagination` object arg to disable the pagination feature.
 * @see PersistTarget
 */
export declare const usePaginationState: <TPersistenceKeyPrefix extends string = string>(args: {
    pagination?: PaginationStateArgs;
} & TablePersistenceArgs<TPersistenceKeyPrefix>) => PaginationState;
//# sourceMappingURL=usePaginationState.d.ts.map