import { PaginationProps, ToolbarItemProps } from '@patternfly/react-core';
import { UsePaginationEffectsArgs } from './usePaginationEffects';
/**
 * Args for usePaginationPropHelpers that come from outside useTablePropHelpers
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useTablePropHelpers (UseTablePropHelpersArgs)
 * @see TableState
 * @see UseTablePropHelpersArgs
 */
export type UsePaginationPropHelpersExternalArgs = UsePaginationEffectsArgs & {
    /**
      The total number of items in the entire un-filtered, un-paginated table (the size of the entire API collection being tabulated).
     */
    totalItemCount: number;
};
/**
 * Returns derived state and prop helpers for the pagination feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export declare const usePaginationPropHelpers: (args: UsePaginationPropHelpersExternalArgs) => {
    paginationProps: PaginationProps;
    paginationToolbarItemProps: ToolbarItemProps;
};
//# sourceMappingURL=usePaginationPropHelpers.d.ts.map