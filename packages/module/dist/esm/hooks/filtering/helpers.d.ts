import { FilterValue, FilterValues } from '../../tackle2-ui-legacy/components/FilterToolbar';
/**
 * Helper function for useFilterState
 * Given a structured filter values object, returns a string to be stored in the feature's PersistTarget (URL params, localStorage, etc).
 */
export declare const serializeFilterUrlParams: <TFilterCategoryKey extends string>(filterValues: FilterValues<TFilterCategoryKey>) => {
    filters?: string | null;
};
/**
 * Helper function for useFilterState
 * Given a string retrieved from the feature's PersistTarget (URL params, localStorage, etc), converts it back to the structured filter values object.
 */
export declare const deserializeFilterUrlParams: <TFilterCategoryKey extends string>(serializedParams: {
    filters?: string | null;
}) => Partial<Record<TFilterCategoryKey, FilterValue>>;
//# sourceMappingURL=helpers.d.ts.map