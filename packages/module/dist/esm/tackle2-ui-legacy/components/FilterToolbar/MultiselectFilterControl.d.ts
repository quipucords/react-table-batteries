import * as React from 'react';
import { FilterControlProps } from './FilterControl';
import { MultiselectFilterCategory } from './FilterToolbar';
export interface MultiselectFilterControlProps<TItem, TFilterCategoryKey extends string> extends FilterControlProps<TItem, TFilterCategoryKey> {
    category: MultiselectFilterCategory<TItem, TFilterCategoryKey>;
    isScrollable?: boolean;
}
export declare const MultiselectFilterControl: <TItem, TFilterCategoryKey extends string>({ category, filterValue, setFilterValue, showToolbarItem, isDisabled, isScrollable, id }: React.PropsWithChildren<MultiselectFilterControlProps<TItem, TFilterCategoryKey>>) => JSX.Element | null;
//# sourceMappingURL=MultiselectFilterControl.d.ts.map