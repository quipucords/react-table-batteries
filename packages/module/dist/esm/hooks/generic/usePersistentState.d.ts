import { UseUrlParamsArgs } from './useUrlParams';
import { UseStorageTypeOptions } from './../storage';
import { DisallowCharacters } from '../../type-utils';
interface PersistToStateOptions {
    persistTo?: 'state';
}
type PersistToUrlParamsOptions<TValue, TPersistenceKeyPrefix extends string, TURLParamKey extends string> = {
    persistTo: 'urlParams';
} & UseUrlParamsArgs<TValue, TPersistenceKeyPrefix, TURLParamKey>;
type PersistToStorageOptions<TValue> = {
    persistTo: 'localStorage' | 'sessionStorage';
} & UseStorageTypeOptions<TValue>;
export type UsePersistentStateOptions<TValue, TPersistenceKeyPrefix extends string, TURLParamKey extends string> = {
    defaultValue: TValue;
    isEnabled?: boolean;
    persistenceKeyPrefix?: DisallowCharacters<TPersistenceKeyPrefix, ':'>;
} & (PersistToStateOptions | PersistToUrlParamsOptions<TValue, TPersistenceKeyPrefix, TURLParamKey> | PersistToStorageOptions<TValue>);
export declare const usePersistentState: <TValue, TPersistenceKeyPrefix extends string, TURLParamKey extends string>(options: UsePersistentStateOptions<TValue, TPersistenceKeyPrefix, TURLParamKey>) => [TValue, (value: TValue) => void];
export {};
//# sourceMappingURL=usePersistentState.d.ts.map