import * as React from 'react';
import { ToolbarFilter, InputGroup, TextInput, Button, ButtonVariant } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
export const SearchFilterControl = ({ category, filterValue, setFilterValue, showToolbarItem, isNumeric, isDisabled = false, id }) => {
    // Keep internal copy of value until submitted by user
    const [inputValue, setInputValue] = React.useState((filterValue === null || filterValue === void 0 ? void 0 : filterValue[0]) || '');
    // Update it if it changes externally
    React.useEffect(() => {
        setInputValue((filterValue === null || filterValue === void 0 ? void 0 : filterValue[0]) || '');
    }, [filterValue]);
    const onFilterSubmit = () => 
    // Ignore value with multiple spaces
    setFilterValue(inputValue ? [inputValue.replace(/\s+/g, ' ')] : []);
    const inputId = `${id}-${category.key}-input`;
    return (React.createElement(ToolbarFilter, { chips: filterValue || [], deleteChip: () => setFilterValue([]), categoryName: category.title, showToolbarItem: showToolbarItem },
        React.createElement(InputGroup, { role: "group" },
            React.createElement(TextInput, { name: inputId, id: inputId, type: isNumeric ? 'number' : 'search', onChange: (_, value) => setInputValue(value), "aria-label": `${category.title} filter`, value: inputValue, placeholder: category.placeholderText, onKeyDown: (event) => {
                    if (event.key && event.key !== 'Enter') {
                        return;
                    }
                    onFilterSubmit();
                }, isDisabled: isDisabled }),
            React.createElement(Button, { variant: ButtonVariant.control, id: `${id}-search-button`, "aria-label": "search button for search input", onClick: onFilterSubmit, isDisabled: isDisabled },
                React.createElement(SearchIcon, null)))));
};
//# sourceMappingURL=SearchFilterControl.js.map