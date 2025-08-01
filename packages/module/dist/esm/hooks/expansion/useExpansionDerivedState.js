/**
 * Given the "source of truth" state for the expansion feature and additional arguments, returns "derived state" values and convenience functions.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 *
 * NOTE: Unlike `useClient[Filter|Sort|Pagination]DerivedState`, this is not named `useClientExpansionDerivedState` because it
 * is always local/client-computed, and it is still used when working with server-computed tables
 * (it's not specific to client-only-computed tables like the other `useClient*DerivedState` functions are).
 */
export const useExpansionDerivedState = (args) => {
    const { idProperty, expansion: { expandedCells, setExpandedCells } } = args;
    const isCellExpanded = (item, columnKey) => columnKey ? expandedCells[String(item[idProperty])] === columnKey : !!expandedCells[String(item[idProperty])];
    const setCellExpanded = ({ item, isExpanding = true, columnKey }) => {
        const newExpandedCells = Object.assign({}, expandedCells);
        if (isExpanding) {
            newExpandedCells[String(item[idProperty])] = columnKey || true;
        }
        else {
            delete newExpandedCells[String(item[idProperty])];
        }
        setExpandedCells(newExpandedCells);
    };
    return { isCellExpanded, setCellExpanded };
};
//# sourceMappingURL=useExpansionDerivedState.js.map