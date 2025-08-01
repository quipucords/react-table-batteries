import { KeyWithValueType } from '../../type-utils';
import { ItemId } from '../../types';
import { SelectionState, SelectionStateArgs } from './useSelectionState';
/**
 * Args for useSelectionDerivedState
 * - Partially satisfied by the object returned by useTableState (TableState)
 * - Makes up part of the arguments object taken by useTablePropHelpers (UseTablePropHelpersArgs)
 * @see TableState
 * @see UseTablePropHelpersArgs
 */
export interface UseSelectionDerivedStateArgs<TItem> {
    /**
     * The string key/name of a property on the API data item objects that can be used as a unique identifier (string or number)
     */
    idProperty: KeyWithValueType<TItem, ItemId>;
    /**
     * The current page of API data items after filtering/sorting/pagination
     */
    currentPageItems: TItem[];
    /**
      The total number of items in the entire un-filtered, un-paginated table (the size of the entire API collection being tabulated).
     */
    totalItemCount: number;
    /**
     * All items in the API collection, if available (client-side tables). Enables selectAll.
     */
    items?: TItem[];
    /**
     * Feature-specific args: A subset of the `TableState` object's `selection` property with the state itself and relevant state args
     */
    selection: SelectionState & Pick<SelectionStateArgs<TItem>, 'isItemSelectable'>;
}
/**
 * Derived state for the selection feature
 * - "Derived state" here refers to values and convenience functions derived at render time based on the "source of truth" state.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 */
export interface SelectionDerivedState<TItem> {
    /**
     * The selected items (full API objects from cache).
     */
    selectedItems: TItem[];
    /**
     * Returns whether the given item is selected.
     */
    isItemSelected: (item: TItem) => boolean;
    /**
     * Returns whether all items (based on `totalItemCount` argument) are selected.
     */
    allSelected: boolean;
    /**
     * Returns whether all items in `currentPageItems` are selected (and only those items).
     */
    pageSelected: boolean;
    /**
     * Toggles selection on one item. Does not select an item that is not selectable (if an isItemSelectable callback is being used).
     */
    selectItem: (item: TItem, isSelecting?: boolean) => void;
    /**
     * Toggles selection on multiple items
     * - If any items are not selected, isSelecting will default to true.
     * - Does not select an item that is not selectable (if an isItemSelectable callback is being used).
     */
    selectItems: (items: TItem[], isSelecting?: boolean) => void;
    /**
     * Selects all selectable items in the whole API collection.
     * - Only works for client-paginated tables where we've passed in the `items` array containing all items (not just the current page).
     */
    selectAll: () => void;
    /**
     * Selects all selectable items on the current page.
     * - Does not select an item that is not selectable (if an isItemSelectable callback is being used).
     */
    selectPage: (selecting?: boolean) => void;
    /**
     * Deselects all items.
     */
    selectNone: () => void;
    /**
     * Selects the given selectable items and deselects all other items.
     */
    setSelectedItems: (items: TItem[]) => void;
}
/**
 * Given the "source of truth" state for the selection feature and additional arguments, returns "derived state" values and convenience functions.
 * - "source of truth" (persisted) state and "derived state" are kept separate to prevent out-of-sync duplicated state.
 *
 * NOTE: Unlike `useClient[Filter|Sort|Pagination]DerivedState`, this is not named `useClientSelectionDerivedState` because it
 * is always local/client-computed, and it is still used when working with server-computed tables
 * (it's not specific to client-only-computed tables like the other `useClient*DerivedState` functions are).
 */
export declare const useSelectionDerivedState: <TItem>(args: UseSelectionDerivedStateArgs<TItem>) => SelectionDerivedState<TItem>;
//# sourceMappingURL=useSelectionDerivedState.d.ts.map