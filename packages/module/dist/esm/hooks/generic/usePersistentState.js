import React from 'react';
import { useUrlParams } from './useUrlParams';
import { useLocalStorage, useSessionStorage } from './../storage';
export const usePersistentState = (options) => {
    const { defaultValue, persistTo, persistenceKeyPrefix, isEnabled = true } = options;
    const isUrlParamsOptions = (o) => o.persistTo === 'urlParams';
    const isStorageOptions = (o) => o.persistTo === 'localStorage' || o.persistTo === 'sessionStorage';
    const prefixKey = (key) => (persistenceKeyPrefix ? `${persistenceKeyPrefix}:${key}` : key);
    const persistence = {
        state: React.useState(defaultValue),
        urlParams: useUrlParams(isUrlParamsOptions(options)
            ? options
            : Object.assign(Object.assign({}, options), { isEnabled: false, keys: [], serialize: () => ({}), deserialize: () => defaultValue })),
        localStorage: useLocalStorage(isStorageOptions(options)
            ? Object.assign(Object.assign({}, options), { key: prefixKey(options.key) }) : Object.assign(Object.assign({}, options), { isEnabled: false, key: '' })),
        sessionStorage: useSessionStorage(isStorageOptions(options)
            ? Object.assign(Object.assign({}, options), { key: prefixKey(options.key) }) : Object.assign(Object.assign({}, options), { isEnabled: false, key: '' }))
    };
    const [value, setValue] = persistence[persistTo || 'state'];
    return isEnabled ? [value, setValue] : [defaultValue, () => { }];
};
//# sourceMappingURL=usePersistentState.js.map