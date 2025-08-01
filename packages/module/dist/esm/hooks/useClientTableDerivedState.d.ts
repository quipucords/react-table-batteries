import { UseClientTableDerivedStateArgs, TableDerivedState, TableState } from '../types';
/**
 * Returns table-level "derived state" (the results of local/client-computed filtering/sorting/pagination)
 * - Used internally by the shorthand hook useClientTableBatteries.
 * - Takes "source of truth" state for all features and additional args.
 * @see useClientTableBatteries
 */
export declare const useClientTableDerivedState: <TItem, TColumnKey extends string, TSortableColumnKey extends TColumnKey, TFilterCategoryKey extends string = string, TPersistenceKeyPrefix extends string = string>(args: TableState<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey, TPersistenceKeyPrefix> & UseClientTableDerivedStateArgs<TItem, TColumnKey, TSortableColumnKey, TFilterCategoryKey>) => TableDerivedState<TItem>;
//# sourceMappingURL=useClientTableDerivedState.d.ts.map