import { TABLE_FEATURES } from './types';
/**
 * Works around problems caused by event propagation when handling a clickable element that contains other clickable elements.
 * - Used internally by useTablePropHelpers for the active item feature, but is generic and could be used outside tables.
 * - When a click event happens within a row, checks if there is a clickable element in between the target node and the row element.
 *   (For example: checkboxes, buttons or links).
 * - Prevents triggering the row click behavior when inner clickable elements or their children are clicked.
 */
export const handlePropagatedRowClick = (event, onRowClick) => {
    // This recursive parent check is necessary because the event target could be,
    // for example, the SVG icon inside a button rather than the button itself.
    const isClickableElementInTheWay = (element) => {
        var _a;
        if (['input', 'button', 'a'].includes(element.tagName.toLowerCase())) {
            return true;
        }
        if (!element.parentElement || ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'tr') {
            return false;
        }
        return isClickableElementInTheWay(element.parentElement);
    };
    if ((event === null || event === void 0 ? void 0 : event.target) instanceof Element && !isClickableElementInTheWay(event.target)) {
        onRowClick(event);
    }
};
export const objectKeys = (obj) => Object.keys(obj);
export const parseMaybeNumericString = (numOrStr) => {
    if (numOrStr === undefined || numOrStr === null) {
        return null;
    }
    const num = Number(numOrStr);
    return isNaN(num) ? numOrStr : num;
};
/**
 * mergeArgs takes two objects which may or may not include feature sub-objects
 * (any two pieces of the partially-constructed TableBatteries object)
 * and combines them, deeply merging the properties in the feature objects.
 * This is used in hooks to combine args, state and derived state to construct the batteries object.
 * @see MergedArgs
 */
export const mergeArgs = (a, b) => {
    const merged = Object.assign(Object.assign({}, a), b);
    TABLE_FEATURES.forEach((feature) => {
        if (b[feature]) {
            merged[feature] = Object.assign(Object.assign({}, a[feature]), b[feature]);
        }
    });
    return merged;
};
//# sourceMappingURL=utils.js.map