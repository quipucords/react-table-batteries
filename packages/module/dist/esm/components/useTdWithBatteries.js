import { __rest } from "tslib";
import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { Td } from '@patternfly/react-table';
export const useTdWithBatteries = (batteries) => {
    const { expansion, propHelpers, idProperty, numRenderedColumns } = batteries;
    const TdWithBatteries = useDeepCompareMemo(() => React.forwardRef((_a, ref) => {
        var { columnKey } = _a, props = __rest(_a, ["columnKey"]);
        return (React.createElement(Td, Object.assign({}, propHelpers.getTdProps({ columnKey }), { innerRef: ref }, props)));
    }), [expansion.isEnabled, expansion.variant, expansion.expandedCells, idProperty, numRenderedColumns]);
    TdWithBatteries.displayName = 'TdWithBatteries';
    return TdWithBatteries;
};
//# sourceMappingURL=useTdWithBatteries.js.map