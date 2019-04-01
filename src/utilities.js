/* eslint-disable no-console */
export const localStorageLoadState = (stateName) => {
  try {
    const stringified = localStorage.getItem(stateName);
    return stringified ? JSON.parse(stringified) : null;

  } catch (e) {
    console.log('localStorageLoadState', e);
  }
};

export const localStorageSaveState = (stateName, newState) => {
  try {
    const stringified = JSON.stringify(newState);
    localStorage.setItem(stateName, stringified);
  } catch (e) {
    console.log('localStorageSaveState', e);
  }
};