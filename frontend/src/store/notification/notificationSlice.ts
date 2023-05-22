import { createSlice } from '@reduxjs/toolkit';
import { createNotification, deleteNotification, getNotificationById, getNotificationsPagination, updateNotification } from './notificationActions';

interface INotification {
    user: string;
    description: string;
    action: string;
   
}

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
}

interface IData extends ICommon {
    Data: INotification[];
}
interface IState {
    data: INotification | null;
    loading: boolean;
    error: string;
}
interface IStates {
    data: IData | null;
    loading: boolean;
    error: string;
}
interface INotificationInitial {
   notificationList: IStates;
   notificationListPagination: IStates;
   notificationUpdate: IState;
   notificationDelete: IState;
   notificationCreate: IState;
   notificationDetails: IState;
}
const initialState: INotificationInitial = {
   notificationList: {
        data: null,
        loading: false,
        error: '',
    },
   notificationListPagination: {
        data: null,
        loading: false,
        error: '',
    },
   notificationUpdate: {
        data: null,
        loading: false,
        error: '',
    },
   notificationDelete: {
        data: null,
        loading: false,
        error: '',
    },
   notificationCreate: {
        data: null,
        loading: false,
        error: '',
    },
   notificationDetails: {
        data: null,
        loading: false,
        error: '',
    },
};
const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNotificationsPagination.pending, (state: any) => {
                state.notificationListPagination.loading = true;
                state.notificationListPagination.error = '';
            })
            .addCase(getNotificationsPagination.fulfilled, (state: any, action: any) => {
                state.notificationListPagination.data = action.payload;
                state.notificationListPagination.loading = false;
                state.notificationListPagination.error = '';
            })
            .addCase(getNotificationsPagination.rejected, (state: any, action: any) => {
                state.notificationListPagination.loading = false;
                state.notificationListPagination.error = action.error.message || '';
            })

            .addCase(getNotificationById.pending, (state: any) => {
                state.notificationDetails.loading = true;
                state.notificationDetails.error = '';
            })
            .addCase(getNotificationById.fulfilled, (state: any, action: any) => {
                state.notificationDetails.data = action.payload;
                state.notificationDetails.loading = false;
                state.notificationDetails.error = '';
            })
            .addCase(getNotificationById.rejected, (state: any, action: any) => {
                state.notificationDetails.loading = false;
                state.notificationDetails.error = action.error.message || '';
            })
            .addCase(createNotification.pending, (state: any) => {
                state.notificationCreate.loading = true;
                state.notificationCreate.error = '';
            })
            .addCase(createNotification.fulfilled, (state: any, action: any) => {
                state.notificationCreate.data = action.payload;
                state.notificationCreate.loading = false;
                state.notificationCreate.error = '';
            })
            .addCase(createNotification.rejected, (state: any, action: any) => {
                state.notificationCreate.loading = false;
                state.notificationCreate.error = action.error.message || '';
            })
            .addCase(deleteNotification.pending, (state: any) => {
                state.notificationDelete.loading = true;
                state.notificationDelete.error = '';
            })
            .addCase(deleteNotification.fulfilled, (state: any, action: any) => {
                state.notificationDelete.data = action.payload;
                state.notificationDelete.loading = false;
                state.notificationDelete.error = '';
            })
            .addCase(deleteNotification.rejected, (state: any, action: any) => {
                state.notificationDelete.loading = false;
                state.notificationDelete.error = action.error.message || '';
            })
            .addCase(updateNotification.pending, (state: any) => {
                state.notificationUpdate.loading = true;
                state.notificationUpdate.error = '';
            })
            .addCase(updateNotification.fulfilled, (state: any, action: any) => {
                state.notificationUpdate.data = action.payload;
                state.notificationUpdate.loading = false;
                state.notificationUpdate.error = '';
            })
            .addCase(updateNotification.rejected, (state: any, action: any) => {
                state.notificationUpdate.loading = false;
                state.notificationUpdate.error = action.error.message || '';
            });
    },
    // createnotification
});

export const notificationActions =notificationSlice.actions;

export default notificationSlice;
