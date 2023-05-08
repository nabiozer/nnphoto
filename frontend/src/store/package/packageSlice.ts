import { createSlice } from '@reduxjs/toolkit';
import { createPackage, deletePackage, getPackageById, getPackagesPagination, updatePackage } from './packageActions';

interface IPackage {
    packageName: string;
    packagePrice: string;
    albumDetail: string;
    familyDetail: string;
    posterDetail: string;
    canvasDetail: string;
    videoKlip: string;
    isDrone: boolean;
    isPlaceInc: boolean;
}

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    TotalPages: number;
}

interface IData extends ICommon {
    Data: IPackage[];
}
interface IState {
    data: IPackage | null;
    loading: boolean;
    error: string;
}
interface IStates {
    data: IData | null;
    loading: boolean;
    error: string;
}
interface IPackageInitial {
    packageList: IStates;
    packageListPagination: IStates;
    packageUpdate: IState;
    packageDelete: IState;
    packageCreate: IState;
    packageDetails: IState;
}
const initialState: IPackageInitial = {
    packageList: {
        data: null,
        loading: false,
        error: '',
    },
    packageListPagination: {
        data: null,
        loading: false,
        error: '',
    },
    packageUpdate: {
        data: null,
        loading: false,
        error: '',
    },
    packageDelete: {
        data: null,
        loading: false,
        error: '',
    },
    packageCreate: {
        data: null,
        loading: false,
        error: '',
    },
    packageDetails: {
        data: null,
        loading: false,
        error: '',
    },
};
const packageSlice = createSlice({
    name: 'package',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPackagesPagination.pending, (state: any) => {
                state.packageListPagination.loading = true;
                state.packageListPagination.error = '';
            })
            .addCase(getPackagesPagination.fulfilled, (state: any, action: any) => {
                state.packageListPagination.data = action.payload;
                state.packageListPagination.loading = false;
                state.packageListPagination.error = '';
            })
            .addCase(getPackagesPagination.rejected, (state: any, action: any) => {
                state.packageListPagination.loading = false;
                state.packageListPagination.error = action.error.message || '';
            })

            .addCase(getPackageById.pending, (state: any) => {
                state.packageDetails.loading = true;
                state.packageDetails.error = '';
            })
            .addCase(getPackageById.fulfilled, (state: any, action: any) => {
                state.packageDetails.data = action.payload;
                state.packageDetails.loading = false;
                state.packageDetails.error = '';
            })
            .addCase(getPackageById.rejected, (state: any, action: any) => {
                state.packageDetails.loading = false;
                state.packageDetails.error = action.error.message || '';
            })
            .addCase(createPackage.pending, (state: any) => {
                state.packageCreate.loading = true;
                state.packageCreate.error = '';
            })
            .addCase(createPackage.fulfilled, (state: any, action: any) => {
                state.packageCreate.data = action.payload;
                state.packageCreate.loading = false;
                state.packageCreate.error = '';
            })
            .addCase(createPackage.rejected, (state: any, action: any) => {
                state.packageCreate.loading = false;
                state.packageCreate.error = action.error.message || '';
            })
            .addCase(deletePackage.pending, (state: any) => {
                state.packageDelete.loading = true;
                state.packageDelete.error = '';
            })
            .addCase(deletePackage.fulfilled, (state: any, action: any) => {
                state.packageDelete.data = action.payload;
                state.packageDelete.loading = false;
                state.packageDelete.error = '';
            })
            .addCase(deletePackage.rejected, (state: any, action: any) => {
                state.packageDelete.loading = false;
                state.packageDelete.error = action.error.message || '';
            })
            .addCase(updatePackage.pending, (state: any) => {
                state.packageUpdate.loading = true;
                state.packageUpdate.error = '';
            })
            .addCase(updatePackage.fulfilled, (state: any, action: any) => {
                state.packageUpdate.data = action.payload;
                state.packageUpdate.loading = false;
                state.packageUpdate.error = '';
            })
            .addCase(updatePackage.rejected, (state: any, action: any) => {
                state.packageUpdate.loading = false;
                state.packageUpdate.error = action.error.message || '';
            });
    },
    // create package
});

export const packageActions = packageSlice.actions;

export default packageSlice;
