/* eslint-disable no-console */
import { useState, useEffect } from 'react';

export const localStorageLoadState = (stateName) => {
  try {
    const stringified = localStorage.getItem(stateName);
    return stringified ? JSON.parse(stringified) : null;

  } catch (e) {}
};

export const localStorageSaveState = (stateName, newState) => {
  try {
    const stringified = JSON.stringify(newState);
    localStorage.setItem(stateName, stringified);
  } catch (e) {}
};

export function useFetchAPI(url, defaultData, mockResponse) {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    // useEffect's return is a clean up function.
    // Using async returns a Promise which blows useEffect up.
    // So we manually do the checking for cancelling.
    let cancelled = false;

    async function fetchAPI() {
      const response = await fetch(url);

      if (!cancelled) {
        if (mockResponse) {
          setData(mockResponse);
        } else {
          setData(response);
        }
      }
    }
    fetchAPI();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return data;
}