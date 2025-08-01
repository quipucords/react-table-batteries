import * as React from 'react';
import { ToolbarFilter } from '@patternfly/react-core';
import { Select, SelectOption } from '@patternfly/react-core/deprecated';
import { css } from '@patternfly/react-styles';
export const SelectFilterControl = ({ category, filterValue, setFilterValue, showToolbarItem, isDisabled = false, isScrollable = false, id }) => {
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false);
    const getOptionKeyFromOptionValue = (optionValue) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.value === optionValue)) === null || _a === void 0 ? void 0 : _a.key; };
    const getChipFromOptionValue = (optionValue) => optionValue ? optionValue.toString() : '';
    const getOptionKeyFromChip = (chip) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.value.toString() === chip)) === null || _a === void 0 ? void 0 : _a.key; };
    const getOptionValueFromOptionKey = (optionKey) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.key === optionKey)) === null || _a === void 0 ? void 0 : _a.value; };
    const onFilterSelect = (value) => {
        const optionKey = getOptionKeyFromOptionValue(value);
        setFilterValue(optionKey ? [optionKey] : null);
        setIsFilterDropdownOpen(false);
    };
    const onFilterClear = (chip) => {
        const optionKey = getOptionKeyFromChip(chip);
        const newValue = filterValue ? filterValue.filter((val) => val !== optionKey) : [];
        setFilterValue(newValue.length > 0 ? newValue : null);
    };
    // Select expects "selections" to be an array of the "value" props from the relevant optionProps
    const selections = filterValue ? filterValue.map(getOptionValueFromOptionKey) : null;
    const chips = selections ? selections.map(getChipFromOptionValue) : [];
    const renderSelectOptions = (options) => options.map((optionProps) => React.createElement(SelectOption, Object.assign({}, optionProps, { key: optionProps.key })));
    return (React.createElement(ToolbarFilter, { id: `${id}-filter-control-${category.key}`, chips: chips, deleteChip: (_, chip) => onFilterClear(chip), categoryName: category.title, showToolbarItem: showToolbarItem },
        React.createElement(Select, { className: css(isScrollable && 'isScrollable'), "aria-label": category.title, toggleId: `${id}-${category.key}-filter-value-select`, onToggle: () => setIsFilterDropdownOpen(!isFilterDropdownOpen), selections: selections || [], onSelect: (_, value) => onFilterSelect(value), isOpen: isFilterDropdownOpen, placeholderText: "Any", isDisabled: isDisabled || category.selectOptions.length === 0 }, renderSelectOptions(category.selectOptions))));
};
//# sourceMappingURL=SelectFilterControl.js.map