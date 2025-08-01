import React from 'react';
import { TrProps } from '@patternfly/react-table';
import { TableBatteries } from '../types';
export interface TrWithBatteriesBaseProps extends TrProps {
    /**
     * Whether to render default built-in select checkboxes, single-expand toggles and spacer Th elements for action columns.
     */
    builtInControls?: boolean;
}
export interface TrWithBatteriesHeaderRowProps extends TrWithBatteriesBaseProps {
    /**
     * Whether this is the header row at the top of the table, containing Th elements.
     * When true, item and rowIndex are not required.
     * @default false
     */
    isHeaderRow: true;
}
export interface TrWithBatteriesBodyRowProps<TItem> extends TrWithBatteriesBaseProps {
    /**
     * Whether this is the header row at the top of the table, containing Th elements.
     * When false, item and rowIndex are required.
     * @default false
     */
    isHeaderRow?: false;
    /**
     * The API data item represented by this row.
     * Required in body rows to make sure row-dependent state like selection and expansion work correctly.
     */
    item: TItem;
    /**
     * This row's index within currentPageItems.
     */
    rowIndex: number;
}
export declare const useTrWithBatteries: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(batteries: Omit<TableBatteries<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix>, "components">) => React.ForwardRefExoticComponent<Omit<TrWithBatteriesHeaderRowProps, "ref"> | Omit<TrWithBatteriesBodyRowProps<TItem>, "ref">>;
//# sourceMappingURL=useTrWithBatteries.d.ts.map