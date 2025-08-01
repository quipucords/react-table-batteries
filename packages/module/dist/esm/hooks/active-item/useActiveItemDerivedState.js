/**
 * Given the "source of truth" state for the active item feature and additional arguments, returns "derived state" values and convenience functions.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 *
 * NOTE: Unlike `useClient[Filter|Sort|Pagination]DerivedState`, this is not named `useClientActiveItemDerivedState` because it
 * is always local/client-computed, and it is still used when working with server-computed tables
 * (it's not specific to client-only-computed tables like the other `useClient*DerivedState` functions are).
 */
export const useActiveItemDerivedState = (args) => {
    const { currentPageItems, idProperty, activeItem: { activeItemId, setActiveItemId } } = args;
    return {
        activeItem: currentPageItems.find((item) => item[idProperty] === activeItemId) || null,
        setActiveItem: (item) => {
            var _a;
            const itemId = ((_a = item === null || item === void 0 ? void 0 : item[idProperty]) !== null && _a !== void 0 ? _a : null); // TODO Assertion shouldn't be necessary here but TS isn't fully inferring item[idProperty]?
            setActiveItemId(itemId);
        },
        clearActiveItem: () => setActiveItemId(null),
        isActiveItem: (item) => item[idProperty] === activeItemId
    };
};
//# sourceMappingURL=useActiveItemDerivedState.js.map