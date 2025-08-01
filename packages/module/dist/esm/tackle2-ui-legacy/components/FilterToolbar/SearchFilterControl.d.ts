import * as React from 'react';
import { FilterControlProps } from './FilterControl';
import { SearchFilterCategory } from './FilterToolbar';
export interface SearchFilterControlProps<TItem, TFilterCategoryKey extends string> extends FilterControlProps<TItem, TFilterCategoryKey> {
    category: SearchFilterCategory<TItem, TFilterCategoryKey>;
    isNumeric: boolean;
}
export declare const SearchFilterControl: <TItem, TFilterCategoryKey extends string>({ category, filterValue, setFilterValue, showToolbarItem, isNumeric, isDisabled, id }: React.PropsWithChildren<SearchFilterControlProps<TItem, TFilterCategoryKey>>) => JSX.Element | null;
//# sourceMappingURL=SearchFilterControl.d.ts.map