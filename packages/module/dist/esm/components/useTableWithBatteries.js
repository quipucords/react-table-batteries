import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { Table } from '@patternfly/react-table';
export const useTableWithBatteries = (batteries) => {
    const { propHelpers } = batteries;
    const TableWithBatteries = useDeepCompareMemo(() => React.forwardRef((props, ref) => (React.createElement(Table, Object.assign({}, propHelpers.tableProps, { innerRef: ref }, props)))), [propHelpers.tableProps]);
    TableWithBatteries.displayName = 'TableWithBatteries';
    return TableWithBatteries;
};
//# sourceMappingURL=useTableWithBatteries.js.map