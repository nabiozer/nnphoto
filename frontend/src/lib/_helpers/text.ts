export const toCapitalize = (str: string) => {
    if (str) {
        return str.toLocaleLowerCase('tr_TR').replace(/(?:^|\s|,|;|!|:|-|\.|\?)[a-z0-9ğçşüoı]/g, function (match) {
            return match.toLocaleUpperCase('tr-TR');
        });
    }
    return str;
};
