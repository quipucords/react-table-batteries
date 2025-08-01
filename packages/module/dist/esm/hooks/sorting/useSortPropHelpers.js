/**
 * Returns derived state and prop helpers for the sort feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useSortPropHelpers = (args) => {
    const { columnKeys, sort: { activeSort, setActiveSort, sortableColumns } } = args;
    /**
     * Returns props for the Th component for a column with sorting enabled.
     */
    const getSortThProps = ({ columnKey }) => sortableColumns.includes(columnKey)
        ? {
            sort: {
                columnIndex: columnKeys.indexOf(columnKey),
                sortBy: {
                    index: activeSort ? columnKeys.indexOf(activeSort.columnKey) : undefined,
                    direction: activeSort === null || activeSort === void 0 ? void 0 : activeSort.direction
                },
                onSort: (_event, index, direction) => {
                    setActiveSort({
                        columnKey: columnKeys[index],
                        direction
                    });
                }
            }
        }
        : {};
    return { getSortThProps };
};
//# sourceMappingURL=useSortPropHelpers.js.map