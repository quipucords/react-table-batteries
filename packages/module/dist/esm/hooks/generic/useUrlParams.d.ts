import { DisallowCharacters } from '../../type-utils';
export type TSerializedParams<TURLParamKey extends string> = Partial<Record<TURLParamKey, string | null>>;
export interface UseUrlParamsArgs<TDeserializedParams, TPersistenceKeyPrefix extends string, TURLParamKey extends string> {
    isEnabled?: boolean;
    persistenceKeyPrefix?: DisallowCharacters<TPersistenceKeyPrefix, ':'>;
    keys: DisallowCharacters<TURLParamKey, ':'>[];
    defaultValue: TDeserializedParams;
    serialize: (params: Partial<TDeserializedParams>) => TSerializedParams<TURLParamKey>;
    deserialize: (serializedParams: TSerializedParams<TURLParamKey>) => TDeserializedParams;
}
export type TURLParamStateTuple<TDeserializedParams> = [
    TDeserializedParams,
    (newParams: Partial<TDeserializedParams>) => void
];
export declare const useUrlParams: <TDeserializedParams, TKeyPrefix extends string, TURLParamKey extends string>({ isEnabled, persistenceKeyPrefix, keys, defaultValue, serialize, deserialize }: UseUrlParamsArgs<TDeserializedParams, TKeyPrefix, TURLParamKey>) => TURLParamStateTuple<TDeserializedParams>;
export declare const trimAndStringifyUrlParams: <TPrefixedURLParamKey extends string>({ existingSearchParams, newPrefixedSerializedParams }: {
    existingSearchParams?: URLSearchParams;
    newPrefixedSerializedParams: TSerializedParams<TPrefixedURLParamKey>;
}) => string;
//# sourceMappingURL=useUrlParams.d.ts.map