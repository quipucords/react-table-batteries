import { __rest } from "tslib";
import * as React from 'react';
import { FilterType } from './FilterToolbar';
import { SelectFilterControl } from './SelectFilterControl';
import { SearchFilterControl } from './SearchFilterControl';
import { MultiselectFilterControl } from './MultiselectFilterControl';
export const FilterControl = (_a) => {
    var { category } = _a, props = __rest(_a, ["category"]);
    if (category.type === FilterType.select) {
        return (React.createElement(SelectFilterControl, Object.assign({ isScrollable: true, category: category }, props)));
    }
    if (category.type === FilterType.search || category.type === FilterType.numsearch) {
        return (React.createElement(SearchFilterControl, Object.assign({ category: category, isNumeric: category.type === FilterType.numsearch }, props)));
    }
    if (category.type === FilterType.multiselect) {
        return (React.createElement(MultiselectFilterControl, Object.assign({ isScrollable: true, category: category }, props)));
    }
    return null;
};
//# sourceMappingURL=FilterControl.js.map