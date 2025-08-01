import * as React from 'react';
import { FilterControlProps } from './FilterControl';
import { SelectFilterCategory } from './FilterToolbar';
export interface SelectFilterControlProps<TItem, TFilterCategoryKey extends string> extends FilterControlProps<TItem, TFilterCategoryKey> {
    category: SelectFilterCategory<TItem, TFilterCategoryKey>;
    isScrollable?: boolean;
}
export declare const SelectFilterControl: <TItem, TFilterCategoryKey extends string>({ category, filterValue, setFilterValue, showToolbarItem, isDisabled, isScrollable, id }: React.PropsWithChildren<SelectFilterControlProps<TItem, TFilterCategoryKey>>) => JSX.Element | null;
//# sourceMappingURL=SelectFilterControl.d.ts.map