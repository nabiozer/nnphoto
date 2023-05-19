import { createSlice } from '@reduxjs/toolkit';
import { createMessage, deleteMessage, getMessageById, getMessagesPagination, updateMessage } from './messageActions';

interface IMessage {
    email: string;
    name: string;
    phone: string;
    message: string;
   
}

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
}

interface IData extends ICommon {
    Data: IMessage[];
}

interface IState {
    data: IMessage | null;
    loading: boolean;
    error: string;
}

interface IStates {
    data: IData | null;
    loading: boolean;
    error: string;
}

interface IMessageInitial {
   messageList: IStates;
   messageListPagination: IStates;
   messageUpdate: IState;
   messageDelete: IState;
   messageCreate: IState;
   messageDetails: IState;
}

const initialState: IMessageInitial = {
   messageList: {
        data: null,
        loading: false,
        error: '',
    },
   messageListPagination: {
        data: null,
        loading: false,
        error: '',
    },
   messageUpdate: {
        data: null,
        loading: false,
        error: '',
    },
   messageDelete: {
        data: null,
        loading: false,
        error: '',
    },
   messageCreate: {
        data: null,
        loading: false,
        error: '',
    },
   messageDetails: {
        data: null,
        loading: false,
        error: '',
    },
};

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMessagesPagination.pending, (state: any) => {
                state.messageListPagination.loading = true;
                state.messageListPagination.error = '';
            })
            .addCase(getMessagesPagination.fulfilled, (state: any, action: any) => {
                state.messageListPagination.data = action.payload;
                state.messageListPagination.loading = false;
                state.messageListPagination.error = '';
            })
            .addCase(getMessagesPagination.rejected, (state: any, action: any) => {
                state.messageListPagination.loading = false;
                state.messageListPagination.error = action.error.message || '';
            })

            .addCase(getMessageById.pending, (state: any) => {
                state.messageDetails.loading = true;
                state.messageDetails.error = '';
            })
            .addCase(getMessageById.fulfilled, (state: any, action: any) => {
                state.messageDetails.data = action.payload;
                state.messageDetails.loading = false;
                state.messageDetails.error = '';
            })
            .addCase(getMessageById.rejected, (state: any, action: any) => {
                state.messageDetails.loading = false;
                state.messageDetails.error = action.error.message || '';
            })
            .addCase(createMessage.pending, (state: any) => {
                state.messageCreate.loading = true;
                state.messageCreate.error = '';
            })
            .addCase(createMessage.fulfilled, (state: any, action: any) => {
                state.messageCreate.data = action.payload;
                state.messageCreate.loading = false;
                state.messageCreate.error = '';
            })
            .addCase(createMessage.rejected, (state: any, action: any) => {
                state.messageCreate.loading = false;
                state.messageCreate.error = action.error.message || '';
            })
            .addCase(deleteMessage.pending, (state: any) => {
                state.messageDelete.loading = true;
                state.messageDelete.error = '';
            })
            .addCase(deleteMessage.fulfilled, (state: any, action: any) => {
                state.messageDelete.data = action.payload;
                state.messageDelete.loading = false;
                state.messageDelete.error = '';
            })
            .addCase(deleteMessage.rejected, (state: any, action: any) => {
                state.messageDelete.loading = false;
                state.messageDelete.error = action.error.message || '';
            })
            .addCase(updateMessage.pending, (state: any) => {
                state.messageUpdate.loading = true;
                state.messageUpdate.error = '';
            })
            .addCase(updateMessage.fulfilled, (state: any, action: any) => {
                state.messageUpdate.data = action.payload;
                state.messageUpdate.loading = false;
                state.messageUpdate.error = '';
            })
            .addCase(updateMessage.rejected, (state: any, action: any) => {
                state.messageUpdate.loading = false;
                state.messageUpdate.error = action.error.message || '';
            });
    },
    // createmessage
});

export const messageActions =messageSlice.actions;

export default messageSlice;
