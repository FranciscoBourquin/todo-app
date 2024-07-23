import { useEffect, useState } from 'react';

export const useLocalStorage = (itemName, initialValue) => {
  const [syncItem, setSyncItem] = useState(true)
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
        setSyncItem(true);

      } catch(error) {

        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[syncItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const synchronizeItem = ()=> {

    setLoading(true);
    setSyncItem(false);

  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}

