import React from 'react';
import { ToolbarItem } from '@patternfly/react-core';
import { useDeepCompareMemo } from 'use-deep-compare';
export const usePaginationToolbarItemWithBatteries = (batteries) => {
    const { propHelpers } = batteries;
    return useDeepCompareMemo(() => (props) => React.createElement(ToolbarItem, Object.assign({}, propHelpers.paginationToolbarItemProps, props)), [propHelpers.paginationToolbarItemProps]);
};
//# sourceMappingURL=usePaginationToolbarItemWithBatteries.js.map