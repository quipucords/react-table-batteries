import React from 'react';
import { PaginationProps } from '@patternfly/react-core';
export interface ToolbarBulkSelectorProps<T> {
    areAllSelected: boolean;
    areAllExpanded?: boolean;
    onSelectAll?: (flag?: boolean) => void;
    onSelectNone: () => void;
    onExpandAll?: (flag?: boolean) => void;
    selectedRows: T[];
    onSelectMultiple: (items: T[], isSelecting: boolean) => void;
    currentPageItems: T[];
    paginationProps: PaginationProps;
    isExpandable?: boolean;
}
/**
 * @deprecated this component comes from tackle2-ui legacy code and should probably be moved somewhere else like PF component groups
 */
export declare const ToolbarBulkSelector: <T>({ currentPageItems, areAllSelected, onSelectAll, onSelectNone, onExpandAll, areAllExpanded, selectedRows, onSelectMultiple, paginationProps, isExpandable }: React.PropsWithChildren<ToolbarBulkSelectorProps<T>>) => JSX.Element | null;
//# sourceMappingURL=ToolbarBulkSelector.d.ts.map