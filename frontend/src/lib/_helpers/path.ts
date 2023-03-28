import { getApiUrl } from './auth';

export const getImagePath = (id: string) => {
    return `${getApiUrl('DMS_APP_DMS_URL')}Document/download${id}`;
};
