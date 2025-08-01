import React from 'react';
import { TdProps } from '@patternfly/react-table';
import { TableBatteries } from '../types';
export interface TdWithBatteriesProps<TColumnKey extends string> extends TdProps {
    /**
     * The key identifying the column associated with this table body cell.
     */
    columnKey: TColumnKey;
}
export declare const useTdWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.ForwardRefExoticComponent<Omit<TdWithBatteriesProps<TColumnKey>, "ref">>;
//# sourceMappingURL=useTdWithBatteries.d.ts.map