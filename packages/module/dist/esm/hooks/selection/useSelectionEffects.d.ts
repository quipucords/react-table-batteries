import { SelectionDerivedState } from './useSelectionDerivedState';
import { SelectionStateArgs } from './useSelectionState';
export interface UseSelectionEffectsArgs<TItem> {
    selection: SelectionDerivedState<TItem> & Pick<SelectionStateArgs<TItem>, 'isEnabled' | 'isItemSelectable'>;
}
export declare const useSelectionEffects: <TItem>(args: UseSelectionEffectsArgs<TItem>) => void;
//# sourceMappingURL=useSelectionEffects.d.ts.map