import React from 'react';
import { ToolbarItemProps } from '@patternfly/react-core';
import { TableBatteries } from '../types';
export declare const usePaginationToolbarItemWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.FC<ToolbarItemProps>;
//# sourceMappingURL=usePaginationToolbarItemWithBatteries.d.ts.map