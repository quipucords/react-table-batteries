import * as React from 'react';
import { SelectOptionProps } from '@patternfly/react-core/deprecated';
export declare enum FilterType {
    select = "select",
    multiselect = "multiselect",
    search = "search",
    numsearch = "numsearch"
}
export type FilterValue = string[] | undefined | null;
export interface OptionPropsWithKey extends SelectOptionProps {
    key: string;
}
export interface BasicFilterCategory<TItem, // The actual API objects we're filtering
TFilterCategoryKey extends string> {
    key: TFilterCategoryKey;
    title: string;
    type: FilterType;
    filterGroup?: string;
    getItemValue?: (item: TItem) => string | boolean;
    serverFilterField?: string;
    getServerFilterValue?: (filterValue: FilterValue) => FilterValue;
}
export interface MultiselectFilterCategory<TItem, TFilterCategoryKey extends string> extends BasicFilterCategory<TItem, TFilterCategoryKey> {
    selectOptions: OptionPropsWithKey[];
    placeholderText?: string;
    logicOperator?: 'AND' | 'OR';
}
export interface SelectFilterCategory<TItem, TFilterCategoryKey extends string> extends BasicFilterCategory<TItem, TFilterCategoryKey> {
    selectOptions: OptionPropsWithKey[];
}
export interface SearchFilterCategory<TItem, TFilterCategoryKey extends string> extends BasicFilterCategory<TItem, TFilterCategoryKey> {
    placeholderText: string;
}
export type FilterCategory<TItem, TFilterCategoryKey extends string> = MultiselectFilterCategory<TItem, TFilterCategoryKey> | SelectFilterCategory<TItem, TFilterCategoryKey> | SearchFilterCategory<TItem, TFilterCategoryKey>;
export type FilterValues<TFilterCategoryKey extends string> = Partial<Record<TFilterCategoryKey, FilterValue>>;
export declare const getFilterLogicOperator: <TItem, TFilterCategoryKey extends string>(filterCategory?: FilterCategory<TItem, TFilterCategoryKey>, defaultOperator?: "AND" | "OR") => "AND" | "OR";
export interface FilterToolbarProps<TItem, TFilterCategoryKey extends string> {
    filterCategories: FilterCategory<TItem, TFilterCategoryKey>[];
    filterValues: FilterValues<TFilterCategoryKey>;
    setFilterValues: (values: FilterValues<TFilterCategoryKey>) => void;
    beginToolbarItems?: JSX.Element;
    endToolbarItems?: JSX.Element;
    pagination?: JSX.Element;
    showFiltersSideBySide?: boolean;
    isDisabled?: boolean;
    id: string;
}
/**
 * @deprecated - This FilterToolbar is an old component from Konveyor that needs to be replaced with a more composable solution.
 * TODO - rewrite FilterToolbar to follow the batteries pattern
 */
export declare const FilterToolbar: <TItem, TFilterCategoryKey extends string>({ filterCategories, filterValues, setFilterValues, pagination, showFiltersSideBySide, isDisabled, id }: React.PropsWithChildren<FilterToolbarProps<TItem, TFilterCategoryKey>>) => JSX.Element | null;
//# sourceMappingURL=FilterToolbar.d.ts.map