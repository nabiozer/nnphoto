


import axios from 'axios';
import { userActions } from './userSlice';

//User Login
export const login = (dataLogin:{email: string, password: string}) => async (dispatch: any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const result = await axios.post('http://localhost:5000/api/users/login', { ...dataLogin }, config);
        dispatch(userActions.userLogin(result.data));
        localStorage.setItem('userInfo', JSON.stringify(result.data));

        if (result.status === 200 ) {
            
        }
    } catch (error:any) {
        console.log(error.message);
    }
 
};

//User Logout
export const logout = () => (dispatch:any) =>  {
    localStorage.removeItem('userInfo')
    dispatch(userActions.userLogout())
    dispatch(userActions.userListReset())
}