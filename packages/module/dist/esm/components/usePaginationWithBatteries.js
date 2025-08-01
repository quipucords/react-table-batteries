import React from 'react';
import { Pagination } from '@patternfly/react-core';
import { useDeepCompareMemo } from 'use-deep-compare';
export const usePaginationWithBatteries = (batteries) => {
    const { propHelpers } = batteries;
    return useDeepCompareMemo(() => (props) => React.createElement(Pagination, Object.assign({}, propHelpers.paginationProps, props)), [propHelpers.paginationProps]);
};
//# sourceMappingURL=usePaginationWithBatteries.js.map