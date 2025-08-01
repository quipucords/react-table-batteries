import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { ToolbarBulkSelector } from '../tackle2-ui-legacy';
export const useToolbarBulkSelectorWithBatteries = (batteries) => {
    const { propHelpers } = batteries;
    return useDeepCompareMemo(() => (props) => React.createElement(ToolbarBulkSelector, Object.assign({}, propHelpers.toolbarBulkSelectorProps, props)), [propHelpers.toolbarBulkSelectorProps]);
};
//# sourceMappingURL=useToolbarBulkSelectorWithBatteries.js.map