import { objectKeys } from '../../utils';
import { usePersistentState } from '../generic/usePersistentState';
/**
 * Provides the "source of truth" state for the expansion feature.
 * - Used internally by useTableState
 * - Takes args defined above as well as optional args for persisting state to a configurable storage target.
 * - Omit the `expansion` object arg to disable the expansion feature.
 * @see PersistTarget
 */
export const useExpansionState = (args = {}) => {
    var _a, _b;
    const { persistenceKeyPrefix } = args;
    const persistTo = ((_a = args.expansion) === null || _a === void 0 ? void 0 : _a.persistTo) || args.persistTo || 'state';
    // We won't need to pass the latter two type params here if TS adds support for partial inference.
    // See https://github.com/konveyor/tackle2-ui/issues/1456
    const [expandedCells, setExpandedCells] = usePersistentState(Object.assign({ isEnabled: ((_b = args.expansion) === null || _b === void 0 ? void 0 : _b.isEnabled) || false, defaultValue: {}, persistenceKeyPrefix }, (persistTo === 'urlParams'
        ? {
            persistTo,
            keys: ['expandedCells'],
            serialize: (expandedCellsObj) => {
                if (!expandedCellsObj || objectKeys(expandedCellsObj).length === 0) {
                    return { expandedCells: null };
                }
                return { expandedCells: JSON.stringify(expandedCellsObj) };
            },
            deserialize: ({ expandedCells: expandedCellsStr }) => {
                try {
                    return JSON.parse(expandedCellsStr || '{}');
                }
                catch (e) {
                    return {};
                }
            }
        }
        : persistTo === 'localStorage' || persistTo === 'sessionStorage'
            ? {
                persistTo,
                key: 'expandedCells'
            }
            : { persistTo })));
    return { expandedCells, setExpandedCells };
};
//# sourceMappingURL=useExpansionState.js.map