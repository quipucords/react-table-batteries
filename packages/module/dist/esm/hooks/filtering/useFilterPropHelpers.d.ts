import { FilterToolbarProps } from '../../tackle2-ui-legacy/components/FilterToolbar';
import { FilterState, FilterStateArgs } from './useFilterState';
import { ToolbarProps } from '@patternfly/react-core';
/**
 * Args for useFilterPropHelpers that come from outside useTablePropHelpers
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useTablePropHelpers (UseTablePropHelpersArgs)
 * @see TableState
 * @see UseTablePropHelpersArgs
 */
export interface UseFilterPropHelpersExternalArgs<TItem, TFilterCategoryKey extends string> {
    /**
     * A subset of the `TableState` object's `filter` property with the state itself and relevant state args
     */
    filter: FilterState<TFilterCategoryKey> & Pick<FilterStateArgs<TItem, TFilterCategoryKey>, 'filterCategories'>;
}
/**
 * Returns derived state and prop helpers for the filter feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export declare const useFilterPropHelpers: <TItem, TFilterCategoryKey extends string>(args: UseFilterPropHelpersExternalArgs<TItem, TFilterCategoryKey>) => {
    filterPropsForToolbar: ToolbarProps;
    propsForFilterToolbar: Omit<FilterToolbarProps<TItem, TFilterCategoryKey>, "id">;
};
//# sourceMappingURL=useFilterPropHelpers.d.ts.map