import React, { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownList, MenuToggle, MenuToggleCheckbox, ToolbarItem } from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
/**
 * @deprecated this component comes from tackle2-ui legacy code and should probably be moved somewhere else like PF component groups
 */
export const ToolbarBulkSelector = ({ currentPageItems, areAllSelected, onSelectAll, onSelectNone, onExpandAll, areAllExpanded, selectedRows, onSelectMultiple, paginationProps, isExpandable }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapseAll = (collapse) => {
        onExpandAll && onExpandAll(!collapse);
    };
    const collapseAllBtn = () => (React.createElement(Button, { variant: "control", title: `${!areAllExpanded ? 'Expand' : 'Collapse'} all`, onClick: () => {
            areAllExpanded !== undefined && toggleCollapseAll(areAllExpanded);
        } }, areAllExpanded ? React.createElement(AngleDownIcon, null) : React.createElement(AngleRightIcon, null)));
    const getBulkSelectState = () => {
        let state;
        if (areAllSelected) {
            state = true;
        }
        else if (selectedRows.length === 0) {
            state = false;
        }
        else {
            state = null;
        }
        return state;
    };
    const handleSelectAll = (checked) => {
        onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!!checked);
    };
    const selectPage = () => onSelectMultiple(currentPageItems.map((item) => item), true);
    // TODO support i18n / custom text for items below
    const dropdownItems = [
        React.createElement(DropdownItem, { onClick: () => {
                handleSelectAll(false);
                setIsOpen(false);
            }, "data-action": "none", key: "select-none", component: "button" }, "Select none (0 items)"),
        React.createElement(DropdownItem, { onClick: () => {
                selectPage();
                setIsOpen(false);
            }, "data-action": "page", key: "select-page", component: "button" },
            "Select page (",
            currentPageItems.length,
            " items)"),
        ...(onSelectAll
            ? [
                React.createElement(DropdownItem, { onClick: () => {
                        handleSelectAll(true);
                        setIsOpen(false);
                    }, "data-action": "all", key: "select-all", component: "button" },
                    "Select all (",
                    paginationProps.itemCount,
                    ")")
            ]
            : [])
    ];
    return (React.createElement(React.Fragment, null,
        isExpandable && React.createElement(ToolbarItem, null, collapseAllBtn()),
        React.createElement(ToolbarItem, null,
            React.createElement(Dropdown, { isOpen: isOpen, toggle: (toggleRef) => (React.createElement(MenuToggle, { ref: toggleRef, onClick: () => setIsOpen(!isOpen), "aria-label": "Bulk selection menu toggle", splitButtonOptions: {
                        items: [
                            React.createElement(MenuToggleCheckbox, { id: "bulk-selected-items-checkbox", key: "bulk-select-checkbox", "aria-label": "Select all", onChange: () => {
                                    if (getBulkSelectState() !== false) {
                                        onSelectNone();
                                    }
                                    else {
                                        if (onSelectAll) {
                                            onSelectAll(true);
                                        }
                                        else {
                                            selectPage();
                                        }
                                    }
                                }, isChecked: getBulkSelectState() })
                        ]
                    } })) },
                React.createElement(DropdownList, null, dropdownItems)))));
};
//# sourceMappingURL=ToolbarBulkSelector.js.map