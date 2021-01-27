export const setObject = (key, object) => localStorage.setItem(key, object);

export const getItem = key => localStorage.getItem(key);

export const removeObject = key => localStorage.removeItem(key);
