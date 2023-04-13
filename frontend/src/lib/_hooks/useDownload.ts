import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type UseS3DownloadReturnType = [
  downloadObject: (a:string,b:string) => void,
  loading: boolean,
  progress: number,
  error: Error | null
];

const useS3Download = (): UseS3DownloadReturnType => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const downloadObject = (signedUrl:string,name:string) => {
    setLoading(true);

    axios({
      url: signedUrl,
      method: 'GET',
      responseType: 'blob',
      headers: {
        'Content-Disposition': `attachment; filename="${name}"`,
        'Content-Type': `application/octet-stream`,
      },
      onDownloadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const percentCompleted = Math.round((loaded * 100) / total!);
        setProgress(percentCompleted);
      
        console.log(percentCompleted)
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
        setProgress(0);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
        setProgress(0);
      });
  };

  return [downloadObject, loading, progress, error];
};

export default useS3Download;