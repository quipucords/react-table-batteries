import React from 'react';
import { PaginationProps } from '@patternfly/react-core';
import { TableBatteries } from '../types';
export declare const usePaginationWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.FC<PaginationProps>;
//# sourceMappingURL=usePaginationWithBatteries.d.ts.map