import React from 'react';
import { ThProps } from '@patternfly/react-table';
import { TableBatteries } from '../types';
export interface ThWithBatteriesProps<TColumnKey extends string> extends ThProps {
    /**
     * The key identifying the column associated with this table header cell.
     */
    columnKey: TColumnKey;
}
export declare const useThWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.ForwardRefExoticComponent<Omit<ThWithBatteriesProps<TColumnKey>, "ref">>;
//# sourceMappingURL=useThWithBatteries.d.ts.map