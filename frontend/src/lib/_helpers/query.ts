import queryString from 'query-string';

export const queryStringToJson = (query: any) => {
    return queryString.parse(query, { parseBooleans: true, arrayFormat: 'comma', parseNumbers: true });
};

export const jsonToQueryString = (data: any) => {
    return queryString.stringify(data, { arrayFormat: 'comma', skipEmptyString: true, skipNull: false });
};
