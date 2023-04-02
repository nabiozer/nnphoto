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


//UserList
export const listUsers = (data:any) => async (dispatch:any,getState:any) => {

    try {
        dispatch(userActions.userList(data))
    } catch (error:any) {
      console.error( error.response && error.response.data.message ? error.response.data.message 
            : error.message)
    }
}

