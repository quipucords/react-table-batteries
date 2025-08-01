import React from 'react';
import { objectKeys } from '../../utils';
export const useUrlParams = ({ isEnabled = true, persistenceKeyPrefix, keys, defaultValue, serialize, deserialize }) => {
    // Sync document.location.search with state via an event listener in order to re-render when it changes
    const [locationSearch, setLocationSearch] = React.useState(document.location.search);
    React.useEffect(() => {
        const onPopState = () => setLocationSearch(document.location.search);
        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    const urlParams = new URLSearchParams(locationSearch);
    const withPrefix = (key) => persistenceKeyPrefix ? `${persistenceKeyPrefix}:${key}` : key;
    const withPrefixes = (serializedParams) => persistenceKeyPrefix
        ? objectKeys(serializedParams).reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [withPrefix(key)]: serializedParams[key] })), {})
        : serializedParams;
    const setParams = (newParams) => {
        // In case setParams is called multiple times synchronously from the same rendered instance,
        // we use document.location here as the current params so these calls never overwrite each other.
        // This also retains any unrelated params that might be present and allows newParams to be a partial update.
        const { pathname, search } = document.location;
        const existingSearchParams = new URLSearchParams(search);
        // We prefix the params object here so the serialize function doesn't have to care about the keyPrefix.
        const newPrefixedSerializedParams = withPrefixes(serialize(newParams));
        const newLocationSearch = trimAndStringifyUrlParams({
            existingSearchParams,
            newPrefixedSerializedParams
        });
        setLocationSearch(newLocationSearch);
        history.replaceState('', '', `${pathname}?${newLocationSearch}`);
    };
    // We un-prefix the params object here so the deserialize function doesn't have to care about the keyPrefix.
    let allParamsEmpty = true;
    let params = defaultValue;
    if (isEnabled) {
        const serializedParams = keys.reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [key]: urlParams.get(withPrefix(key)) })), {});
        allParamsEmpty = keys.every((key) => !serializedParams[key]);
        params = allParamsEmpty ? defaultValue : deserialize(serializedParams);
    }
    React.useEffect(() => {
        if (allParamsEmpty) {
            setParams(defaultValue);
        }
        // Leaving this rule enabled results in a cascade of unnecessary useCallbacks:
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allParamsEmpty]);
    return [params, setParams];
};
export const trimAndStringifyUrlParams = ({ existingSearchParams = new URLSearchParams(), newPrefixedSerializedParams }) => {
    const existingPrefixedSerializedParams = Object.fromEntries(existingSearchParams);
    objectKeys(newPrefixedSerializedParams).forEach((key) => {
        // Returning undefined for a property from serialize should result in it being omitted from the partial update.
        if (newPrefixedSerializedParams[key] === undefined) {
            delete newPrefixedSerializedParams[key];
        }
        // Returning null for a property from serialize should result in it being removed from the URL.
        if (newPrefixedSerializedParams[key] === null) {
            delete newPrefixedSerializedParams[key];
            delete existingPrefixedSerializedParams[key];
        }
    });
    const newParams = new URLSearchParams(Object.assign(Object.assign({}, existingPrefixedSerializedParams), newPrefixedSerializedParams));
    newParams.sort();
    return newParams.toString();
};
//# sourceMappingURL=useUrlParams.js.map