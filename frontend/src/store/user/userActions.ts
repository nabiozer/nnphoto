import { userActions } from './userSlice';

//User Login
export const login = (dataLogin: any) => async (dispatch: any) => {
    try {
        dispatch(userActions.userLogin(dataLogin));
    } catch (error: any) {
        console.log(error.message);
    }
};

//User Logout
export const logout = () => (dispatch: any) => {
    dispatch(userActions.userLogout());
    dispatch(userActions.userListReset());
};

//User Register
export const register = (dataRegister: any) => async (dispatch: any) => {
    try {
        dispatch(userActions.userRegister(dataRegister));
    } catch (error) {
        console.log(error);
    }
};
