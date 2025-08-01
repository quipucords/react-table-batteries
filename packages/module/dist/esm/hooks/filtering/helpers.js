import { objectKeys } from '../../utils';
/**
 * Helper function for useFilterState
 * Given a structured filter values object, returns a string to be stored in the feature's PersistTarget (URL params, localStorage, etc).
 */
export const serializeFilterUrlParams = (filterValues) => {
    // If a filter value is empty/cleared, don't put it in the object in URL params
    const trimmedFilterValues = Object.assign({}, filterValues);
    objectKeys(trimmedFilterValues).forEach((filterCategoryKey) => {
        var _a;
        if (!trimmedFilterValues[filterCategoryKey] || ((_a = trimmedFilterValues[filterCategoryKey]) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            delete trimmedFilterValues[filterCategoryKey];
        }
    });
    return {
        filters: objectKeys(trimmedFilterValues).length > 0 ? JSON.stringify(trimmedFilterValues) : null // If there are no filters, remove the filters param from the URL entirely.
    };
};
/**
 * Helper function for useFilterState
 * Given a string retrieved from the feature's PersistTarget (URL params, localStorage, etc), converts it back to the structured filter values object.
 */
export const deserializeFilterUrlParams = (serializedParams) => {
    try {
        return JSON.parse(serializedParams.filters || '{}');
    }
    catch (e) {
        return {};
    }
};
//# sourceMappingURL=helpers.js.map