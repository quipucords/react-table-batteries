import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { FilterToolbar } from '../tackle2-ui-legacy';
/**
 * @deprecated based on the FilterToolbar from tackle2-ui-legacy which needs to be rewritten.
 * Included here so the consumer can wrap all rendering and not use any propHelpers directly.
 */
export const useFilterToolbarWithBatteries = (batteries) => {
    const { filter, propHelpers } = batteries;
    return useDeepCompareMemo(() => (props) => (filter.isEnabled ? React.createElement(FilterToolbar, Object.assign({}, propHelpers.filterToolbarProps, props)) : null), [filter.isEnabled, propHelpers.filterToolbarProps]);
};
//# sourceMappingURL=useFilterToolbarWithBatteries.js.map