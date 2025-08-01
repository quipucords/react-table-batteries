import React from 'react';
import { TableBatteries } from '../types';
import { FilterToolbarProps } from '../tackle2-ui-legacy';
export type FilterToolbarWithBatteriesProps<TItem, TFilterCategoryKey extends string> = Partial<Omit<FilterToolbarProps<TItem, TFilterCategoryKey>, 'id'>> & Pick<FilterToolbarProps<TItem, TFilterCategoryKey>, 'id'>;
/**
 * @deprecated based on the FilterToolbar from tackle2-ui-legacy which needs to be rewritten.
 * Included here so the consumer can wrap all rendering and not use any propHelpers directly.
 */
export declare const useFilterToolbarWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.FC<FilterToolbarWithBatteriesProps<TItem, TFilterCategoryKey>>;
//# sourceMappingURL=useFilterToolbarWithBatteries.d.ts.map