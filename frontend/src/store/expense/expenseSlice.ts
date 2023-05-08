import { createSlice } from '@reduxjs/toolkit';
import { createExpense, deleteExpense, getExpenseById, getExpensesPagination, updateExpense } from './expenseActions';

interface IExpense {
    fee: string;
    date: string;
    description: string;
   
}

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
}

interface IData extends ICommon {
    Data: IExpense[];
}
interface IState {
    data: IExpense | null;
    loading: boolean;
    error: string;
}
interface IStates {
    data: IData | null;
    loading: boolean;
    error: string;
}
interface IExpenseInitial {
   expenseList: IStates;
   expenseListPagination: IStates;
   expenseUpdate: IState;
   expenseDelete: IState;
   expenseCreate: IState;
   expenseDetails: IState;
}
const initialState: IExpenseInitial = {
   expenseList: {
        data: null,
        loading: false,
        error: '',
    },
   expenseListPagination: {
        data: null,
        loading: false,
        error: '',
    },
   expenseUpdate: {
        data: null,
        loading: false,
        error: '',
    },
   expenseDelete: {
        data: null,
        loading: false,
        error: '',
    },
   expenseCreate: {
        data: null,
        loading: false,
        error: '',
    },
   expenseDetails: {
        data: null,
        loading: false,
        error: '',
    },
};
const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getExpensesPagination.pending, (state: any) => {
                state.expenseListPagination.loading = true;
                state.expenseListPagination.error = '';
            })
            .addCase(getExpensesPagination.fulfilled, (state: any, action: any) => {
                state.expenseListPagination.data = action.payload;
                state.expenseListPagination.loading = false;
                state.expenseListPagination.error = '';
            })
            .addCase(getExpensesPagination.rejected, (state: any, action: any) => {
                state.expenseListPagination.loading = false;
                state.expenseListPagination.error = action.error.message || '';
            })

            .addCase(getExpenseById.pending, (state: any) => {
                state.expenseDetails.loading = true;
                state.expenseDetails.error = '';
            })
            .addCase(getExpenseById.fulfilled, (state: any, action: any) => {
                state.expenseDetails.data = action.payload;
                state.expenseDetails.loading = false;
                state.expenseDetails.error = '';
            })
            .addCase(getExpenseById.rejected, (state: any, action: any) => {
                state.expenseDetails.loading = false;
                state.expenseDetails.error = action.error.message || '';
            })
            .addCase(createExpense.pending, (state: any) => {
                state.expenseCreate.loading = true;
                state.expenseCreate.error = '';
            })
            .addCase(createExpense.fulfilled, (state: any, action: any) => {
                state.expenseCreate.data = action.payload;
                state.expenseCreate.loading = false;
                state.expenseCreate.error = '';
            })
            .addCase(createExpense.rejected, (state: any, action: any) => {
                state.expenseCreate.loading = false;
                state.expenseCreate.error = action.error.message || '';
            })
            .addCase(deleteExpense.pending, (state: any) => {
                state.expenseDelete.loading = true;
                state.expenseDelete.error = '';
            })
            .addCase(deleteExpense.fulfilled, (state: any, action: any) => {
                state.expenseDelete.data = action.payload;
                state.expenseDelete.loading = false;
                state.expenseDelete.error = '';
            })
            .addCase(deleteExpense.rejected, (state: any, action: any) => {
                state.expenseDelete.loading = false;
                state.expenseDelete.error = action.error.message || '';
            })
            .addCase(updateExpense.pending, (state: any) => {
                state.expenseUpdate.loading = true;
                state.expenseUpdate.error = '';
            })
            .addCase(updateExpense.fulfilled, (state: any, action: any) => {
                state.expenseUpdate.data = action.payload;
                state.expenseUpdate.loading = false;
                state.expenseUpdate.error = '';
            })
            .addCase(updateExpense.rejected, (state: any, action: any) => {
                state.expenseUpdate.loading = false;
                state.expenseUpdate.error = action.error.message || '';
            });
    },
    // createexpense
});

export const expenseActions =expenseSlice.actions;

export default expenseSlice;
