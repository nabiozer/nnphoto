
// import * as yup from 'yup';
// import { IResultData, IResultGeneral } from '../../types/data';
// import { getToken, getUserPermissions, setLoginData } from '../_common/_helpers/auth';
// import { useEffect } from 'react';
// import Input from './Form/Input';
// import Button from './Form/Button/Button';

// export type LoginStateType = {
//     username: string;
//     password: string;
// };

// export const LoginStateDefaultValue: LoginStateType = {
//     username: '',
//     password: '',
// };

// interface IProps {
//     appName: string;
//     history: any;
//     baseUrl: string;
//     activeToken: string | null;
//     storageUser: string;
//     setStore: any;
//     loggedIn: boolean;
//     fetcher: any;
//     logo: string;
//     master: any;
// }

// export default (props: IProps) => {
//     const { history, baseUrl, activeToken, storageUser, appName, setStore, loggedIn = false, fetcher, logo, master } = props;

//     const { control, errors, handleSubmit } = useForm({
//         defaultValues: LoginStateDefaultValue,
//         validationSchema: {
//             userName: yup.string().required('Lütfen giriniz'),
//             password: yup.string().required('lütfen şifre girin'),
//         },
//     });

//     const [{ loading }, login] = fetcher({ url: 'Login', method: 'POST', baseURL: baseUrl }, { manual: true });
//     const [{ loading: loadingDetails }, getUserDetails] = fetcher({ url: 'GetUserDetails', baseUrl: baseUrl }, { manual: true });

//     const [{ loading: loadingInfo }, getMyPersonData] = fetcher(
//         {
//             baseUrl: master,
//             method: 'GET',
//         },
//         { manual: true }
//     );

//     const onSubmit = async (data: LoginStateType) => {
//         const result: IResultGeneral<any> = await login({ data });
//         if (result.status === 200) {
//             let UserData: any = {
//                 Token: result.data.Data.Token,
//                 RefreshToken: result.data.Data.RefreshToken,
//             };
//             fetcher.headers = {
//                 ...getToken(UserData.Token),
//             };

//             const resultToken = await getUserDetails({
//                 headers: {
//                     ...getToken(UserData.Token),
//                 },
//             });

//             if (resultToken.status === 200) {
//                 const uData = resultToken.data.Data;
//                 UserData = {
//                     ...UserData,
//                     Permissions: getUserPermissions(
//                         uData?.Permissions,
//                         uData?.TitleRoles && uData?.TtileRoles?.length > 0 ? uData?.TtileRoles[0]?.Role?.Permissions : []
//                     ),
//                 };
//                 const personCode: string = uData.PersonalCode;
//                 if (Number(personCode)) {
//                     const resultMyData: IResultGeneral<IResultData<any>> = await getMyPersonData({
//                         url: 'getUrlForData' + personCode,
//                     });
//                     if (resultMyData.status === 200) {
//                         const pData = resultMyData.data.Data;
//                         UserData = {
//                             ...UserData,
//                             ...pData,
//                         };
//                     }
//                 }

//                 await setLoginData(UserData, storageUser);
//                 if (history.location.search) {
//                     history.push(history.location.search.replace('?ref=', ''));
//                 } else {
//                     history.push('/');
//                 }
//             }
//         }
//     };

//     useEffect(() => {
//         if (loggedIn && !activeToken) {
//             console.log('set store!');
//         }
//     }, [loggedIn]);

//     return (
//         <div className="login-container">
//             <div className="login-form">
//                 <div className="form-area">
//                     <div className="form-title">App</div>
//                     <div className="error-container"></div>
//                     <div className="form">
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="form-field">
//                                 <Input
//                                     id="username"
//                                     name="username"
//                                     placeholder="Kullanıcı Adı"
//                                     label="Kullanıcı Adı"
//                                     control={control}
//                                     errors={errors}
//                                 />
//                             </div>
//                             <div className="form-field">
//                                 <Input
//                                     id="pass"
//                                     name="pass"
//                                     placeholder="şifre"
//                                     label="şifre Adı"
//                                     control={control}
//                                     errors={errors}
//                                     className="custom-login-field"
//                                 />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 className="custom-button-green"
//                                 loading={loading || loadingDetails}
//                                 disabled={loading}
//                                 text="giriş"
//                                 iconRight={<i className="fad fa-arrow-right ml-2" />}
//                             />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
