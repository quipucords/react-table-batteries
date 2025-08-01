import * as React from 'react';
import { useSelectionDerivedState } from './useSelectionDerivedState';
import { useSelectionEffects } from './useSelectionEffects';
import { mergeArgs } from '../../utils';
export const useSelectionPropHelpers = (args) => {
    const { paginationProps, currentPageItems, items, selection: { isItemSelectable = () => true } } = args;
    const selectionDerivedState = useSelectionDerivedState(args);
    const { selectItem, selectItems, selectAll, selectNone, selectedItems, isItemSelected, allSelected } = selectionDerivedState;
    useSelectionEffects(mergeArgs(args, { selection: selectionDerivedState }));
    // State for shift+click multi-select behavior
    const [lastSelectedRowIndex, setLastSelectedRowIndex] = React.useState(null);
    React.useEffect(() => {
        setLastSelectedRowIndex(null);
    }, [paginationProps.page]);
    const [isShiftKeyHeld, setIsShiftKeyHeld] = React.useState(false);
    React.useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Shift') {
                setIsShiftKeyHeld(true);
            }
        };
        const onKeyUp = (e) => {
            if (e.key === 'Shift') {
                setIsShiftKeyHeld(false);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, []);
    /**
     * Props for the ToolbarBulkSelector component.
     */
    const toolbarBulkSelectorProps = {
        onSelectAll: items ? selectAll : undefined, // If we don't have all items in scope, we can't select all
        onSelectNone: selectNone,
        areAllSelected: allSelected,
        selectedRows: selectedItems,
        paginationProps,
        currentPageItems,
        onSelectMultiple: selectItems
    };
    /**
     * Returns props for the Td component used as the checkbox cell for each row when using the selection feature.
     */
    const getSelectCheckboxTdProps = ({ item, rowIndex }) => ({
        select: {
            rowIndex,
            onSelect: (_event, isSelecting) => {
                if (isShiftKeyHeld && lastSelectedRowIndex !== null) {
                    const numberSelected = rowIndex - lastSelectedRowIndex;
                    const intermediateIndexes = numberSelected > 0
                        ? Array.from(new Array(numberSelected + 1), (_x, i) => i + lastSelectedRowIndex)
                        : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);
                    intermediateIndexes.forEach((index) => currentPageItems[index] && selectItem(currentPageItems[index], isSelecting));
                }
                else {
                    selectItem(item, isSelecting);
                }
                setLastSelectedRowIndex(rowIndex);
            },
            isSelected: isItemSelected(item),
            isDisabled: isItemSelectable && !isItemSelectable(item)
        }
    });
    return { selectionDerivedState, toolbarBulkSelectorProps, getSelectCheckboxTdProps };
};
//# sourceMappingURL=useSelectionPropHelpers.js.map