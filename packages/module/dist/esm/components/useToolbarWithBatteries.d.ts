import React from 'react';
import { ToolbarProps } from '@patternfly/react-core';
import { TableBatteries } from '../types';
export declare const useToolbarWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.FC<Omit<ToolbarProps, "ref">>;
//# sourceMappingURL=useToolbarWithBatteries.d.ts.map