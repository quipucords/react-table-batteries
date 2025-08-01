import { __rest } from "tslib";
import React from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';
import { Th } from '@patternfly/react-table';
export const useThWithBatteries = (batteries) => {
    const { sort, propHelpers } = batteries;
    const ThWithBatteries = useDeepCompareMemo(() => React.forwardRef((_a, ref) => {
        var { columnKey } = _a, props = __rest(_a, ["columnKey"]);
        return (React.createElement(Th, Object.assign({}, propHelpers.getThProps({ columnKey }), { innerRef: ref }, props)));
    }), [sort === null || sort === void 0 ? void 0 : sort.isEnabled, sort === null || sort === void 0 ? void 0 : sort.activeSort, sort === null || sort === void 0 ? void 0 : sort.sortableColumns]);
    ThWithBatteries.displayName = 'ThWithBatteries';
    return ThWithBatteries;
};
//# sourceMappingURL=useThWithBatteries.js.map