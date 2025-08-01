import { ExpansionState } from './useExpansionState';
import { TdProps } from '@patternfly/react-table';
import { KeyWithValueType } from '../../type-utils';
import { ItemId } from '../../types';
/**
 * Args for useExpansionPropHelpers that come from outside useTablePropHelpers
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useTablePropHelpers (UseTablePropHelpersArgs)
 * @see TableState
 * @see UseTablePropHelpersArgs
 */
export interface UseExpansionPropHelpersExternalArgs<TItem, TColumnKey extends string> {
    /**
     * An ordered mapping of unique keys to human-readable column name strings.
     * - Keys of this object are used as unique identifiers for columns (`columnKey`).
     * - Values of this object are rendered in the column headers by default (can be overridden by passing children to <Th>) and used as `dataLabel` for cells in the column.
     */
    columnNames: Record<TColumnKey, string>;
    /**
     * The string key/name of a property on the API data item objects that can be used as a unique identifier (string or number)
     */
    idProperty: KeyWithValueType<TItem, ItemId>;
    /**
     * A subset of the `TableState` object's `expansion` property - here we only need the state itself.
     */
    expansion: ExpansionState<TColumnKey>;
}
/**
 * Additional args for useExpansionPropHelpers that come from logic inside useTablePropHelpers
 * @see useTablePropHelpers
 */
export interface UseExpansionPropHelpersInternalArgs<TColumnKey extends string> {
    /**
     * The keys of the `columnNames` object (unique keys identifying each column).
     */
    columnKeys: TColumnKey[];
    /**
     * The total number of columns (Td elements that should be rendered in each Tr)
     * - Includes data cells (based on the number of `columnKeys`) and non-data cells for enabled features.
     * - For use as the colSpan of a cell that spans an entire row.
     */
    numRenderedColumns: number;
}
/**
 * Returns derived state and prop helpers for the expansion feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export declare const useExpansionPropHelpers: <TItem, TColumnKey extends string>(args: UseExpansionPropHelpersExternalArgs<TItem, TColumnKey> & UseExpansionPropHelpersInternalArgs<TColumnKey>) => {
    expansionDerivedState: import("./useExpansionDerivedState").ExpansionDerivedState<TItem, TColumnKey>;
    getSingleExpandButtonTdProps: ({ item, rowIndex }: {
        item: TItem;
        rowIndex: number;
    }) => Omit<TdProps, "ref">;
    getCompoundExpandTdProps: ({ columnKey, item, rowIndex }: {
        columnKey: TColumnKey;
        item: TItem;
        rowIndex: number;
    }) => Omit<TdProps, "ref">;
    getExpandedContentTdProps: ({ item }: {
        item: TItem;
    }) => Omit<TdProps, "ref">;
};
//# sourceMappingURL=useExpansionPropHelpers.d.ts.map