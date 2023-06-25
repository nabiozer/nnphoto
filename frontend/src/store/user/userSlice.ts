import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authUser, deleteUser, fetchUsers, fetchUsersExcel, getProfile, getUserById, registerUser, updateUserByAdmin } from './userActions';

interface IUser {
    name: string;
    email: string;
    deliveryInfo: {
        adress: string;
        phoneNumber: string;
    };
    reservationInfo: {
        album:{
            album:string;
            pvc:string;
            wood:string;
            box:string;
            posterDetail:string;
            albumDetail:string;
            familyDetail:string;
            canvasDetail:string;
        },
        date: string;
        hour: string;
        place: string;
        packagePrice: string;
        packageDetails: string;
        advancePayment: number;
        isPoster:boolean;
        extras:string;
    };

    chosen: {
        album: {
            colorCode?: string;
            albumName?: string;
        };
        photosChosen?: string[];
        poster?: string;
        cover?: string;
        coverText?: string;
        isChoiced: boolean;
    };
    photos?: string;
    video?: string;
    isAdmin: boolean;
    album: string;
    isDone: boolean;
    token?:string;
    downloadedCountPhoto?:number;
    downloadedCountVideo?:number;
}

interface ICommon {
    PageNumber: number;
    PageSize: number;
    TotalCount:number,
    TotalPages: number
}

interface  IUserPagination extends ICommon {
    Data:IUser[];

}

interface IState {
    data : IUser  | null,
    loading:boolean,
    error:string,
  }
  interface IStates {
    data : IUserPagination | null,
    loading:boolean,
    error:string,
  }
  interface IUserInitial {
    userList :IStates,
    userDelete:IState,
    userLogin:IState,
    userDetails:IState,
    userRegister:IState,
    userUpdate:IState,
    userListExcel:IStates,
  }

  const initialState:IUserInitial = {
    userList: {
        data: null,
        loading: false,
        error: '',
    },
    userDelete: {
        data: null,
        loading: false,
        error: '',
    },
    userLogin: {
        data:
            typeof window !== 'undefined' && sessionStorage?.getItem('userInfo')
                ? JSON.parse(sessionStorage?.getItem('userInfo')!)
                : null,
        loading: false,
        error: '',
    },

    userDetails: { data: null, loading: false, error: '' },
    userUpdate: { data: null, loading: false, error: '' },
    userRegister: { data: null, loading: false, error: '' },
    userListExcel: {
        data: null,
        loading: false,
        error: '',
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userLogin(state, action: PayloadAction<IUser>) {
            state.userLogin.data = { ...action.payload };
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        userLogout(state) {
            state.userLogin.data = null;
            sessionStorage.removeItem('userInfo');
        },
        userListReset(state) {
            state.userList.data = null;
            state.userList.loading = false;
            state.userList.error = '';
        },
        // userRegister(state, action: PayloadAction<User>) {
        //     state.userRegister = { ...action.payload };
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.userRegister.loading = true;
                state.userRegister.error = '';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userRegister.data = action.payload;
                state.userRegister.loading = false;
                state.userRegister.error = '';
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.userRegister.loading = false;
                state.userRegister.error = action.error.message || '';
            })
            .addCase(fetchUsers.pending, (state) => {
                state.userList.loading = true;
                state.userList.error = '';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userList.data = action.payload;
                state.userList.loading = false;
                state.userList.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.userList.loading = false;
                state.userList.error = action.error.message || '';
            })
            .addCase(fetchUsersExcel.pending, (state) => {
                state.userListExcel.loading = true;
                state.userListExcel.error = '';
            })
            .addCase(fetchUsersExcel.fulfilled, (state, action) => {
                state.userListExcel.data = action.payload;
                state.userListExcel.loading = false;
                state.userListExcel.error = '';
            })
            .addCase(fetchUsersExcel.rejected, (state, action) => {
                state.userListExcel.loading = false;
                state.userListExcel.error = action.error.message || '';
            })
            .addCase(deleteUser.pending, (state) => {
                state.userDelete.loading = true;
                state.userDelete.error = '';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.userDelete.data = action.payload;
                state.userDelete.loading = false;
                state.userDelete.error = '';
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.userDelete.loading = false;
                state.userDelete.error = action.error.message || '';
            })
            .addCase(authUser.pending, (state) => {
                state.userLogin.loading = true;
                state.userLogin.error = '';
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.userLogin.data = action.payload;
                state.userLogin.loading = false;
                state.userLogin.error = '';
                sessionStorage.setItem('userInfo', JSON.stringify(action.payload));
            })
            .addCase(authUser.rejected, (state, action) => {
                state.userLogin.loading = false;
                state.userLogin.error = action.error.message || '';
            })
            .addCase(getUserById.pending, (state) => {
                state.userDetails.loading = true;
                state.userDetails.error = '';
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.userDetails.data = action.payload;
                state.userDetails.loading = false;
                state.userDetails.error = '';
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.userDetails.loading = false;
                state.userDetails.error = action.error.message || '';
            })
            .addCase(updateUserByAdmin.pending, (state) => {
                state.userUpdate.loading = true;
                state.userUpdate.error = '';
            })
            .addCase(updateUserByAdmin.fulfilled, (state, action) => {
                state.userUpdate.data = action.payload;
                state.userUpdate.loading = false;
                state.userUpdate.error = '';
            })
            .addCase(updateUserByAdmin.rejected, (state, action) => {
                state.userUpdate.loading = false;
                state.userUpdate.error = action.error.message || '';
            })
            .addCase(getProfile.pending, (state) => {
                state.userDetails.loading = true;
                state.userDetails.error = '';
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.userDetails.data = action.payload;
                state.userDetails.loading = false;
                state.userDetails.error = '';
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.userDetails.loading = false;
                state.userDetails.error = action.error.message || '';
            })
    },
});

export const userActions = userSlice.actions;

export default userSlice;
