import * as React from 'react';
import { FilterCategory, FilterValue } from './FilterToolbar';
export interface FilterControlProps<TItem, TFilterCategoryKey extends string> {
    category: FilterCategory<TItem, TFilterCategoryKey>;
    filterValue: FilterValue;
    setFilterValue: (newValue: FilterValue) => void;
    showToolbarItem: boolean;
    isDisabled?: boolean;
    id: string;
}
export declare const FilterControl: <TItem, TFilterCategoryKey extends string>({ category, ...props }: React.PropsWithChildren<FilterControlProps<TItem, TFilterCategoryKey>>) => JSX.Element | null;
//# sourceMappingURL=FilterControl.d.ts.map