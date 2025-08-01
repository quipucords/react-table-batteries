import { parseMaybeNumericString } from '../../utils';
import { usePersistentState } from '../generic/usePersistentState';
/**
 * Provides the "source of truth" state for the active item feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `activeItem` object arg to disable the active item feature.
 * @see PersistTarget
 */
export const useActiveItemState = (args = {}) => {
    var _a, _b;
    const { persistenceKeyPrefix } = args;
    const persistTo = ((_a = args === null || args === void 0 ? void 0 : args.activeItem) === null || _a === void 0 ? void 0 : _a.persistTo) || args.persistTo || 'state';
    // We won't need to pass the latter two type params here if TS adds support for partial inference.
    // See https://github.com/konveyor/tackle2-ui/issues/1456
    const [activeItemId, setActiveItemId] = usePersistentState(Object.assign({ isEnabled: ((_b = args.activeItem) === null || _b === void 0 ? void 0 : _b.isEnabled) || false, defaultValue: null, persistenceKeyPrefix }, (persistTo === 'urlParams'
        ? {
            persistTo,
            keys: ['activeItem'],
            serialize: (activeItemId) => ({
                activeItem: activeItemId !== null ? String(activeItemId) : null
            }),
            deserialize: ({ activeItem }) => parseMaybeNumericString(activeItem)
        }
        : persistTo === 'localStorage' || persistTo === 'sessionStorage'
            ? {
                persistTo,
                key: 'activeItem'
            }
            : { persistTo })));
    return { activeItemId, setActiveItemId };
};
//# sourceMappingURL=useActiveItemState.js.map