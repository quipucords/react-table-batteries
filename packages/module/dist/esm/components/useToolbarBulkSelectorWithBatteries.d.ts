import React from 'react';
import { TableBatteries } from '../types';
import { ToolbarBulkSelectorProps } from '../tackle2-ui-legacy';
export type ToolbarBulkSelectorWithBatteriesProps<TItem> = Partial<ToolbarBulkSelectorProps<TItem>>;
export declare const useToolbarBulkSelectorWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.FC<ToolbarBulkSelectorWithBatteriesProps<TItem>>;
//# sourceMappingURL=useToolbarBulkSelectorWithBatteries.d.ts.map