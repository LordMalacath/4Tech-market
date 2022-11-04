import _ from 'lodash';
import React from 'react';

export function useLocalStorageSubscriber(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    React.useEffect(() => {
        window.addEventListener('storage', subscriber);

        return () => {
            window.removeEventListener('storage', subscriber);
        }
    }, []);

    const subscriber = () => {
        const item = JSON.parse(window.localStorage.getItem(key));
        const compare = _.isEqual(item, storedValue)
        if (compare)
            setStoredValue(item);
    };

    return storedValue;
}