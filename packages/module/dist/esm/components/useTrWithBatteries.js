import { __rest } from "tslib";
import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { Td, Th, Tr } from '@patternfly/react-table';
export const useTrWithBatteries = (batteries) => {
    const { selection, expansion, activeItem, propHelpers, numColumnsBeforeData, numColumnsAfterData } = batteries;
    const TrWithBatteries = useDeepCompareMemo(() => React.forwardRef((props, ref) => {
        const { isHeaderRow, onRowClick, builtInControls = true, children } = props, otherProps = __rest(props, ["isHeaderRow", "onRowClick", "builtInControls", "children"]);
        const { item, rowIndex } = props;
        return (React.createElement(Tr, Object.assign({}, propHelpers.getTrProps({ item, onRowClick }), { innerRef: ref }, otherProps), !builtInControls ? (children) : isHeaderRow ? (React.createElement(React.Fragment, null,
            Array(numColumnsBeforeData)
                .fill(null)
                .map((_, i) => (React.createElement(Th, { key: i }))),
            children,
            Array(numColumnsAfterData)
                .fill(null)
                .map((_, i) => (React.createElement(Th, { key: i }))))) : item ? (React.createElement(React.Fragment, null,
            expansion.isEnabled && expansion.variant === 'single' && rowIndex !== undefined && (React.createElement(Td, Object.assign({}, propHelpers.getSingleExpandButtonTdProps({ item, rowIndex })))),
            selection.isEnabled && rowIndex !== undefined && (React.createElement(Td, Object.assign({}, propHelpers.getSelectCheckboxTdProps({ item, rowIndex })))),
            children)) : (children)));
    }), [
        activeItem.isEnabled,
        activeItem.activeItemId,
        selection.isEnabled,
        selection.selectedItemIds,
        expansion.isEnabled,
        expansion.expandedCells
    ]);
    TrWithBatteries.displayName = 'TrWithBatteries';
    return TrWithBatteries;
};
//# sourceMappingURL=useTrWithBatteries.js.map