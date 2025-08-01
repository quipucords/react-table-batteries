import { PaginationProps } from '@patternfly/react-core';
import { ToolbarBulkSelectorProps } from '../../tackle2-ui-legacy/components/ToolbarBulkSelector';
import { SelectionDerivedState, UseSelectionDerivedStateArgs } from './useSelectionDerivedState';
import { UseSelectionEffectsArgs } from './useSelectionEffects';
import { TdProps } from '@patternfly/react-table';
import { MergedArgs } from '../../type-utils';
/**
 * Args for useSelectionPropHelpers that come from outside useTablePropHelpers
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useTablePropHelpers (UseTablePropHelpersArgs)
 * @see TableState
 * @see UseTablePropHelpersArgs
 */
export type UseSelectionPropHelpersExternalArgs<TItem> = MergedArgs<UseSelectionDerivedStateArgs<TItem>, {
    selection: Omit<UseSelectionEffectsArgs<TItem>['selection'], keyof SelectionDerivedState<TItem>>;
}, 'selection'>;
/**
 * Additional args for useSelectionPropHelpers that come from logic inside useTablePropHelpers
 * @see useTablePropHelpers
 */
export interface UseSelectionPropHelpersInternalArgs {
    /**
     * Pagination props returned by usePaginationPropHelpers
     */
    paginationProps: PaginationProps;
}
export declare const useSelectionPropHelpers: <TItem>(args: UseSelectionPropHelpersExternalArgs<TItem> & UseSelectionPropHelpersInternalArgs) => {
    selectionDerivedState: SelectionDerivedState<TItem>;
    toolbarBulkSelectorProps: ToolbarBulkSelectorProps<TItem>;
    getSelectCheckboxTdProps: (args: {
        item: TItem;
        rowIndex: number;
    }) => Omit<TdProps, "ref">;
};
//# sourceMappingURL=useSelectionPropHelpers.d.ts.map