import React from 'react';
import { Toolbar } from '@patternfly/react-core';
import { useDeepCompareMemo } from 'use-deep-compare';
// Note: Toolbar probably should also be a forwardRef, but the Toolbar PF component does not pass down a ref
//       even though it accepts one in its props (via extending props for HTMLDivElement).
export const useToolbarWithBatteries = (batteries) => {
    const { propHelpers } = batteries;
    return useDeepCompareMemo(() => (props) => React.createElement(Toolbar, Object.assign({}, propHelpers.toolbarProps, props)), [propHelpers.toolbarProps]);
};
//# sourceMappingURL=useToolbarWithBatteries.js.map