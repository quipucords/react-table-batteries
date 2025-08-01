import { useExpansionDerivedState } from './useExpansionDerivedState';
/**
 * Returns derived state and prop helpers for the expansion feature based on given "source of truth" state.
 * - Used internally by useTablePropHelpers
 * - "Derived state" here refers to values and convenience functions derived at render time.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export const useExpansionPropHelpers = (args) => {
    const { columnNames, idProperty, columnKeys, numRenderedColumns, expansion: { expandedCells } } = args;
    const expansionDerivedState = useExpansionDerivedState(args);
    const { isCellExpanded, setCellExpanded } = expansionDerivedState;
    /**
     * Returns props for the Td to the left of the data cells which contains each row's expansion toggle button (only for single-expand).
     */
    const getSingleExpandButtonTdProps = ({ item, rowIndex }) => ({
        expand: {
            rowIndex,
            isExpanded: isCellExpanded(item),
            onToggle: () => setCellExpanded({
                item,
                isExpanding: !isCellExpanded(item)
            }),
            expandId: `expandable-row-${item[idProperty]}`
        }
    });
    /**
     * Returns props for the Td which is a data cell in an expandable column and functions as an expand toggle (only for compound-expand)
     */
    const getCompoundExpandTdProps = ({ columnKey, item, rowIndex }) => ({
        compoundExpand: {
            isExpanded: isCellExpanded(item, columnKey),
            onToggle: () => setCellExpanded({
                item,
                isExpanding: !isCellExpanded(item, columnKey),
                columnKey
            }),
            expandId: `compound-expand-${item[idProperty]}-${columnKey}`,
            rowIndex,
            columnIndex: columnKeys.indexOf(columnKey)
        }
    });
    /**
     * Returns props for the Td which contains the expanded content below an expandable row (for both single-expand and compound-expand).
     * This Td should be rendered as the only cell in a Tr just below the Tr containing the corresponding row.
     * The Tr for the row content and the Tr for the expanded content should be the only two children of a Tbody grouping them (one per expandable row).
     */
    const getExpandedContentTdProps = ({ item }) => {
        const expandedColumnKey = expandedCells[String(item[idProperty])];
        return {
            dataLabel: typeof expandedColumnKey === 'string' ? columnNames[expandedColumnKey] : undefined,
            noPadding: true,
            colSpan: numRenderedColumns,
            width: 100
        };
    };
    return {
        expansionDerivedState,
        getSingleExpandButtonTdProps,
        getCompoundExpandTdProps,
        getExpandedContentTdProps
    };
};
//# sourceMappingURL=useExpansionPropHelpers.js.map