import { usePersistentState } from '../generic/usePersistentState';
import { serializeFilterUrlParams } from './helpers';
import { deserializeFilterUrlParams } from './helpers';
/**
 * Provides the "source of truth" state for the filter feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `filter` object arg to disable the filtering feature.
 * @see PersistTarget
 */
export const useFilterState = (args) => {
    var _a, _b, _c;
    const { persistenceKeyPrefix } = args;
    const persistTo = ((_a = args.filter) === null || _a === void 0 ? void 0 : _a.persistTo) || args.persistTo || 'state';
    const initialFilterValues = ((_b = args.filter) === null || _b === void 0 ? void 0 : _b.initialFilterValues) || {};
    // We won't need to pass the latter two type params here if TS adds support for partial inference.
    // See https://github.com/konveyor/tackle2-ui/issues/1456
    const [filterValues, setFilterValues] = usePersistentState(Object.assign({ isEnabled: ((_c = args.filter) === null || _c === void 0 ? void 0 : _c.isEnabled) || false, defaultValue: initialFilterValues, persistenceKeyPrefix }, (persistTo === 'urlParams'
        ? {
            persistTo,
            keys: ['filters'],
            serialize: serializeFilterUrlParams,
            deserialize: deserializeFilterUrlParams
        }
        : persistTo === 'localStorage' || persistTo === 'sessionStorage'
            ? { persistTo, key: 'filters' }
            : { persistTo })));
    return { filterValues, setFilterValues };
};
//# sourceMappingURL=useFilterState.js.map