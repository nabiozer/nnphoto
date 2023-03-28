export const setCookie = (cookieName:string,cvalue:any,expiredTime:number = 1) :void => {
    const d = new Date();
    d.setTime(d.getTime() + (expiredTime * 60 * 60 *1000));
    const expires = `Expires=${d.toUTCString()}`;
    document.cookie = `${cookieName}=${JSON.stringify(cvalue)}; ${expires} ;Path=/`;
}


export const getCookie = (cookieName:string) :string => {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while(cookie.charAt(0) === '') {
            cookie = cookie.substring(1);
        } //
        if(cookie.indexOf(name) === 0) {
            return JSON.parse(cookie.substring(name.length,cookie.length));
        }
    }

    return '';
}


export const removeCookie = (cookieName: string): void => {
    document.cookie =`${cookieName}=test; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/;`;
}