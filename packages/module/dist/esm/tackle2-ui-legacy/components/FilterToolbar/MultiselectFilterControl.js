import * as React from 'react';
import { ToolbarFilter } from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core/deprecated'; // TODO upgrade to new PF5 Select stuff
import { css } from '@patternfly/react-styles';
export const MultiselectFilterControl = ({ category, filterValue, setFilterValue, showToolbarItem, isDisabled = false, isScrollable = false, id }) => {
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false);
    const getOptionKeyFromOptionValue = (optionValue) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.value === optionValue)) === null || _a === void 0 ? void 0 : _a.key; };
    const getChipFromOptionValue = (optionValue) => optionValue ? optionValue.toString() : '';
    const getOptionKeyFromChip = (chip) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.value.toString() === chip)) === null || _a === void 0 ? void 0 : _a.key; };
    const getOptionValueFromOptionKey = (optionKey) => { var _a; return (_a = category.selectOptions.find((optionProps) => optionProps.key === optionKey)) === null || _a === void 0 ? void 0 : _a.value; };
    const onFilterSelect = (value) => {
        const optionKey = getOptionKeyFromOptionValue(value);
        if (optionKey && (filterValue === null || filterValue === void 0 ? void 0 : filterValue.includes(optionKey))) {
            const updatedValues = filterValue.filter((item) => item !== optionKey);
            setFilterValue(updatedValues);
        }
        else {
            if (filterValue) {
                const updatedValues = [...filterValue, optionKey];
                setFilterValue(updatedValues);
            }
            else {
                setFilterValue([optionKey || '']);
            }
        }
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
    const onOptionsFilter = (_event, textInput) => renderSelectOptions(category.selectOptions.filter((optionProps) => {
        var _a, _b;
        // Note: The in-dropdown filter can match the option's key or value. This may not be desirable?
        if (!textInput) {
            return false;
        }
        const optionValue = (_a = optionProps === null || optionProps === void 0 ? void 0 : optionProps.value) === null || _a === void 0 ? void 0 : _a.toString();
        return (((_b = optionProps === null || optionProps === void 0 ? void 0 : optionProps.key) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(textInput.toLowerCase())) ||
            optionValue.toLowerCase().includes(textInput.toLowerCase()));
    }));
    // TODO support i18n / custom text here?
    const placeholderText = category.placeholderText || `Filter by ${category.title}...`;
    return (React.createElement(ToolbarFilter, { id: `${id}-filter-control-${category.key}`, chips: chips, deleteChip: (_, chip) => onFilterClear(chip), categoryName: category.title, showToolbarItem: showToolbarItem },
        React.createElement(Select, { className: css(isScrollable && 'isScrollable'), "aria-label": category.title, toggleId: `${id}-${category.key}-filter-value-select`, onToggle: () => setIsFilterDropdownOpen(!isFilterDropdownOpen), selections: selections || [], onSelect: (_, value) => onFilterSelect(value), isOpen: isFilterDropdownOpen, placeholderText: placeholderText, isDisabled: isDisabled || category.selectOptions.length === 0, variant: SelectVariant.checkbox, hasInlineFilter: true, onFilter: onOptionsFilter }, renderSelectOptions(category.selectOptions))));
};
//# sourceMappingURL=MultiselectFilterControl.js.map