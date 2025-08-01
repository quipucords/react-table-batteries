import * as React from 'react';
import { Dropdown, DropdownItem, DropdownGroup, DropdownList, MenuToggle, ToolbarToggleGroup, ToolbarItem } from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { FilterControl } from './FilterControl';
export var FilterType;
(function (FilterType) {
    FilterType["select"] = "select";
    FilterType["multiselect"] = "multiselect";
    FilterType["search"] = "search";
    FilterType["numsearch"] = "numsearch";
})(FilterType || (FilterType = {}));
export const getFilterLogicOperator = (filterCategory, defaultOperator = 'OR') => (filterCategory && filterCategory.logicOperator) ||
    defaultOperator;
/**
 * @deprecated - This FilterToolbar is an old component from Konveyor that needs to be replaced with a more composable solution.
 * TODO - rewrite FilterToolbar to follow the batteries pattern
 */
export const FilterToolbar = ({ filterCategories, filterValues, setFilterValues, pagination, showFiltersSideBySide = false, isDisabled = false, id }) => {
    var _a;
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = React.useState(false);
    const [currentFilterCategoryKey, setCurrentFilterCategoryKey] = React.useState((_a = filterCategories[0]) === null || _a === void 0 ? void 0 : _a.key);
    const onCategorySelect = (category) => {
        setCurrentFilterCategoryKey(category.key);
        setIsCategoryDropdownOpen(false);
    };
    const setFilterValue = (category, newValue) => setFilterValues(Object.assign(Object.assign({}, filterValues), { [category.key]: newValue }));
    const currentFilterCategory = filterCategories.find((category) => category.key === currentFilterCategoryKey);
    const filterGroups = filterCategories.reduce((groups, category) => !category.filterGroup || groups.includes(category.filterGroup) ? groups : [...groups, category.filterGroup], []);
    const renderDropdownItems = () => {
        if (filterGroups.length) {
            return filterGroups.map((filterGroup) => (React.createElement(DropdownGroup, { label: filterGroup, key: filterGroup },
                React.createElement(DropdownList, null, filterCategories
                    .filter((filterCategory) => filterCategory.filterGroup === filterGroup)
                    .map((filterCategory) => (React.createElement(DropdownItem, { id: `filter-category-${filterCategory.key}`, key: filterCategory.key, onClick: () => onCategorySelect(filterCategory) }, filterCategory.title)))))));
        }
        else {
            return filterCategories.map((category) => (React.createElement(DropdownItem, { id: `filter-category-${category.key}`, key: category.key, onClick: () => onCategorySelect(category) }, category.title)));
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(ToolbarToggleGroup, { variant: "filter-group", toggleIcon: React.createElement(FilterIcon, null), breakpoint: "2xl", spaceItems: showFiltersSideBySide ? { default: 'spaceItemsMd' } : undefined },
            !showFiltersSideBySide && (React.createElement(ToolbarItem, null,
                React.createElement(Dropdown, { toggle: (toggleRef) => (React.createElement(MenuToggle, { id: `${id}-filtered-by`, "aria-label": "Filtered by" // TODO support i18n / custom text here
                        , ref: toggleRef, onClick: () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen), isDisabled: isDisabled },
                        React.createElement(FilterIcon, null),
                        " ", currentFilterCategory === null || currentFilterCategory === void 0 ? void 0 :
                        currentFilterCategory.title)), isOpen: isCategoryDropdownOpen }, renderDropdownItems()))),
            filterCategories.map((category) => (React.createElement(FilterControl, { id: id, key: category.key, category: category, filterValue: filterValues[category.key], setFilterValue: (newValue) => setFilterValue(category, newValue), showToolbarItem: showFiltersSideBySide || (currentFilterCategory === null || currentFilterCategory === void 0 ? void 0 : currentFilterCategory.key) === category.key, isDisabled: isDisabled })))),
        pagination ? React.createElement(ToolbarItem, { variant: "pagination" }, pagination) : null));
};
//# sourceMappingURL=FilterToolbar.js.map