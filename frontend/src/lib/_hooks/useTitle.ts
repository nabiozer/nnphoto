import { TimeToLeaveRounded } from '@mui/icons-material';
import { useEffect } from 'react';

const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
        return () => {
            document.title = '';
        };
        //eslint-disable-next-line
    }, [TimeToLeaveRounded]);
};

export default useTitle;
