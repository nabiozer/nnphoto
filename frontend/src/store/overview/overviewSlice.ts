import { createSlice } from '@reduxjs/toolkit';
import { getOverview } from './overviewActions';

interface IOverview {
    choiceWaiting: number;
    done: number;
    inAlbumCompany: number;
    progressingAlbum: number;
    totalExpense: number;
    totalIncome: number;
    totalUsers: number;
    waitingShooting: number;
}

interface IState {
    data: IOverview | null;
    loading: boolean;
    error: string;
}

interface IOverviewInitial {
    overview: IState;
}
const initialState: IOverviewInitial = {
    overview: {
        data: null,
        loading: false,
        error: '',
    },
};
const overviewSlice = createSlice({
    name: 'overview',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOverview.pending, (state: any) => {
                state.overview.loading = true;
                state.overview.error = '';
            })
            .addCase(getOverview.fulfilled, (state: any, action: any) => {
                state.overview.data = action.payload;
                state.overview.loading = false;
                state.overview.error = '';
            })
            .addCase(getOverview.rejected, (state: any, action: any) => {
                state.overview.loading = false;
                state.overview.error = action.error.message || '';
            });
    },
    // createoverview
});

export const overviewActions = overviewSlice.actions;

export default overviewSlice;
