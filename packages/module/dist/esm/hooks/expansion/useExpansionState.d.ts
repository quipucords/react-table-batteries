import { FeatureStateCommonArgs, TablePersistenceArgs } from '../../types';
/**
 * A map of item ids (strings resolved from `item[idProperty]`) to either:
 * - a `columnKey` if that item's row has a compound-expanded cell
 * - or a boolean:
 *   - true if the row is expanded (for single-expand)
 *   - false if the row and all its cells are collapsed (for both single-expand and compound-expand).
 */
export type ExpandedCells<TColumnKey extends string> = Record<string, TColumnKey | boolean>;
/**
 * Feature-specific args for useExpansionState
 * - Used as the `expansion` sub-object in args of both useExpansionState and useTableState as a whole
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see UseTableStateArgs
 * @see TableBatteries
 */
export interface ExpansionStateArgs extends FeatureStateCommonArgs {
    /**
     * Whether to use single-expand or compound-expand behavior
     * - "single" for the entire row to be expandable with one toggle.
     * - "compound" for multiple cells in a row to be expandable with individual toggles.
     */
    variant: 'single' | 'compound';
}
/**
 * The "source of truth" state for the expansion feature.
 * - Included in the `TableState` object returned by useTableState under the `expansion` sub-object (combined with args above).
 * - Also included in the `TableBatteries` object returned by useTablePropHelpers and useClientTableBatteries.
 * @see TableState
 * @see TableBatteries
 */
export interface ExpansionState<TColumnKey extends string> {
    /**
     * A map of item ids to a `columnKey` or boolean for the current expansion state of that cell/row
     * @see ExpandedCells
     */
    expandedCells: ExpandedCells<TColumnKey>;
    /**
     * Updates the `expandedCells` map (replacing the entire map).
     * - See `expansionDerivedState` for helper functions to expand/collapse individual cells/rows.
     * @see ExpansionDerivedState
     */
    setExpandedCells: (newExpandedCells: ExpandedCells<TColumnKey>) => void;
}
/**
 * Provides the "source of truth" state for the expansion feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `expansion` object arg to disable the expansion feature.
 * @see PersistTarget
 */
export declare const useExpansionState: <TColumnKey extends string, TPersistenceKeyPrefix extends string = string>(args?: {
    expansion?: ExpansionStateArgs;
} & TablePersistenceArgs<TPersistenceKeyPrefix>) => ExpansionState<TColumnKey>;
//# sourceMappingURL=useExpansionState.d.ts.map