import * as React from 'react';
const getValueFromStorage = (storageType, key, defaultValue) => {
    if (typeof window === 'undefined') {
        return defaultValue;
    }
    try {
        const itemJSON = window[storageType].getItem(key);
        return itemJSON ? JSON.parse(itemJSON) : defaultValue;
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return defaultValue;
    }
};
const setValueInStorage = (storageType, key, newValue) => {
    if (typeof window === 'undefined') {
        return;
    }
    try {
        if (newValue !== undefined) {
            const newValueJSON = JSON.stringify(newValue);
            window[storageType].setItem(key, newValueJSON);
            if (storageType === 'localStorage') {
                // setItem only causes the StorageEvent to be dispatched in other windows. We dispatch it here
                // manually so that all instances of useLocalStorage on this window also react to this change.
                window.dispatchEvent(new StorageEvent('storage', { key, newValue: newValueJSON }));
            }
        }
        else {
            window[storageType].removeItem(key);
            if (storageType === 'localStorage') {
                window.dispatchEvent(new StorageEvent('storage', { key, newValue: null }));
            }
        }
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};
const useStorage = ({ isEnabled = true, type, key, defaultValue, }) => {
    const [cachedValue, setCachedValue] = React.useState(getValueFromStorage(type, key, defaultValue));
    const usingStorageEvents = type === 'localStorage' && typeof window !== 'undefined' && isEnabled;
    const setValue = React.useCallback((newValueOrFn) => {
        const newValue = newValueOrFn instanceof Function
            ? newValueOrFn(getValueFromStorage(type, key, defaultValue))
            : newValueOrFn;
        setValueInStorage(type, key, newValue);
        if (!usingStorageEvents) {
            // The cache won't update automatically if there is no StorageEvent dispatched.
            setCachedValue(newValue);
        }
    }, [type, key, defaultValue, usingStorageEvents]);
    React.useEffect(() => {
        if (!usingStorageEvents) {
            return;
        }
        const onStorageUpdated = (event) => {
            if (event.key === key) {
                setCachedValue(event.newValue ? JSON.parse(event.newValue) : defaultValue);
            }
        };
        window.addEventListener('storage', onStorageUpdated);
        return () => {
            window.removeEventListener('storage', onStorageUpdated);
        };
    }, [key, defaultValue, usingStorageEvents]);
    return [cachedValue, setValue];
};
export const useLocalStorage = (options) => useStorage(Object.assign(Object.assign({}, options), { type: 'localStorage' }));
export const useSessionStorage = (options) => useStorage(Object.assign(Object.assign({}, options), { type: 'sessionStorage' }));
//# sourceMappingURL=useStorage.js.map