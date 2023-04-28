import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type UseS3DownloadReturnType = [
  downloadObject: (a:string,b:string) => void,
  loading: boolean,
  error: Error | null | number,
];

const useS3Download = (setValue:any): UseS3DownloadReturnType => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);



  const downloadObject = (signedUrl:string,name:string) => {
    setLoading(true);

    axios({
      url: signedUrl,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Disposition': `attachment; filename="${name}"`,
      },
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentCompleted = Math.round((loaded * 100) / total!);
        setValue(percentCompleted);
      
      }
    })
      .then((response: AxiosResponse<Blob>) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',name);
        document.body.appendChild(link);
        link.click();
        link.remove();
        setLoading(false);
        setValue(0);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
        setValue(0);
      });
  };

  return [downloadObject, loading, error];
};

export default useS3Download;