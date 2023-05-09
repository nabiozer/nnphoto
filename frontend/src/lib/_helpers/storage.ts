export const getLocalStorageItem = (key: string): string => {
    
    const item: any = typeof window !== 'undefined' && localStorage?.getItem(key)
    return item !== 'undefined' ? JSON.parse(item) : null;
};

export const setILocalStorageItem = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string) => {
    window.localStorage.removeItem(key);
};

export const getSessionStorageItem = (key: any) => {
    const item: any = window?.sessionStorage?.getItem(key);
    return item !== 'undefined' ? JSON.parse(item) : null;
};

export const setISessionStorageItem = (key: string, value: any) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeSessionsetISessionStorageItem = (key: string) => {
    window.sessionStorage.removeItem(key);
};
