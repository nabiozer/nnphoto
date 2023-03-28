

import { getSessionStorageItem, setISessionStorageItem } from './storage';

export const getApiUrl = (key: any) => {
    return `${process.env.REACT_APP_API_URL}${process.env[key]}`;
};

export function getToken(token: any): any {
    let headersObject: any = {};
    if (token) {
        headersObject = {
            Authorization: 'Bearer ' + token,
        };
    }

    return {
        'Content-Type': 'application/json charset=utf-8',
        'Cache-Control': 'no-cache',
        ...headersObject,
    };
}

export const parseJWT = (token: string) => {
    const base64Url: string = token.split('.')[1];
    const base64: string = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

export const tokenIsExpired = (exp: number): boolean => {
    const currentTime: number = new Date().getTime() / 1000;
    return currentTime > exp;
};

export const storageAppUserConstants: any = {
    RealEstates_User: 'RealEstates_User',
};

export const getActiveToken = (checkExpiration = false, key: string): string | null => {
    const token: any = getSessionStorageItem(storageAppUserConstants[key]);
    const tokenParseData = token?.Token && parseJWT(token.Token);
    if (checkExpiration && token && tokenIsExpired(tokenParseData.exp)) {
        return null;
    }
    return token?.Token;
};

export const getUserPermissions = (userRolePermissions: any[], titleRolePermissions: any[]) => {
    const userPermission = userRolePermissions.length ? userRolePermissions.map((item: any) => item.Code) : [];
    const titlePermission = titleRolePermissions.length ? titleRolePermissions.map((item: any) => item.Code) : [];

    return [...userPermission, ...titlePermission];
};

export const isAuthenticated = (key: any) => getActiveToken(true, key) !== null;

export function buildRequestHeader(key: any): HeadersInit {
    let headersObject: any = {};
    if (isAuthenticated(key)) {
        headersObject = {
            Authorization: 'Bearer' + getActiveToken(true, key),
        };
    }

    return {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache',
        ...headersObject,
    };
}

export const logout = () => {
    try {
        localStorage.clear();
        sessionStorage.clear();
        return new Promise((resolve) => {
            resolve(true);
        });
    } catch {
        return new Promise((resolve) => {
            resolve(false);
        });
    }
};

export const fillSessionStorageWith = (userDetail: any, appUser: string): void => {
    setISessionStorageItem(appUser, userDetail);
};

export const setLoginData = (loginData: any, appUser: string): Promise<any> => {
    fillSessionStorageWith(loginData, appUser);
    // toastMessage({
    //     message: `Welcome, ${loginData.fullname}`,
    // });
    return new Promise((resolve) => {
        resolve(loginData);
    });
};

export const setReLoginData = (userDetail: any, APPkEY: string): Promise<any> => {
    fillSessionStorageWith(userDetail, APPkEY);
    // toastMessage({
    //     message: `Welcome, ${userDetail.fullname}`,
    // });
    return new Promise((resolve) => {
        resolve(userDetail);
    });
};
