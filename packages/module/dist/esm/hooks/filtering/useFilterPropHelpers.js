/**
 * Returns derived state and prop helpers for the filter feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useFilterPropHelpers = (args) => {
    const { filter: { filterValues, setFilterValues, filterCategories } } = args;
    /**
     * Filter-related props for the PF Toolbar component
     */
    const filterPropsForToolbar = {
        collapseListedFiltersBreakpoint: 'xl',
        clearAllFilters: () => setFilterValues({}),
        clearFiltersButtonText: 'Clear all filters' // TODO support i18n / custom text here
    };
    /**
     * Props for the FilterToolbar component (our component for rendering filters)
     */
    const propsForFilterToolbar = {
        filterCategories,
        filterValues,
        setFilterValues
    };
    // TODO fix the confusing naming here... we have FilterToolbar and Toolbar which both have filter-related props
    return { filterPropsForToolbar, propsForFilterToolbar };
};
//# sourceMappingURL=useFilterPropHelpers.js.map