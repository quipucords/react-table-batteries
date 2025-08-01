import React from 'react';
import { TableProps } from '@patternfly/react-table';
import { TableBatteries } from '../types';
export declare const useTableWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.ForwardRefExoticComponent<Omit<TableProps, "ref">>;
//# sourceMappingURL=useTableWithBatteries.d.ts.map