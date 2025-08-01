import { FeatureStateCommonArgs, ItemId, TablePersistenceArgs } from '../../types';
/**
 * Feature-specific args for useSortState
 * - Used as the `activeItem` sub-object in args of both useActiveItemState and useTableState as a whole
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see UseTableStateArgs
 * @see TableBatteries
 */
export type ActiveItemStateArgs = FeatureStateCommonArgs;
/**
 * The "source of truth" state for the active item feature.
 * - Included in the `TableState` object returned by useTableState under the `activeItem` sub-object (combined with args above).
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see TableState
 * @see TableBatteries
 */
export interface ActiveItemState {
    /**
     * The item id (string or number resolved from `item[idProperty]`) of the active item. Null if no item is active.
     */
    activeItemId: ItemId | null;
    /**
     * Updates the active item by id. Pass null to dismiss the active item.
     */
    setActiveItemId: (id: ItemId | null) => void;
}
/**
 * Provides the "source of truth" state for the active item feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `activeItem` object arg to disable the active item feature.
 * @see PersistTarget
 */
export declare const useActiveItemState: <TPersistenceKeyPrefix extends string = string>(args?: {
    activeItem?: ActiveItemStateArgs;
} & TablePersistenceArgs<TPersistenceKeyPrefix>) => ActiveItemState;
//# sourceMappingURL=useActiveItemState.d.ts.map