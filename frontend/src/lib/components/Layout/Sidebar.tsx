// import { Backdrop } from '@mui/material';
// // import Link from 'next/link';
// // import { useRouter } from 'next/router';
// import  { Fragment, memo, useEffect, useState } from 'react';
// import { getSessionStorageItem } from '../../_helpers/storage';
// import { IBaseMenu, IMenuData, IOtherMenu } from './type';
// import {useNavigate} from "react-router-dom"

// interface IProps {
//     children?: any;
//     sidebarMobile: boolean;
//     sidebarMobileClose: () => void;
// }

// export default memo((props: IProps) => {
//     const { sidebarMobile, sidebarMobileClose } = props;
//     const router = useNavigate();
//     const url: any = router.pathname.split('/');
//     const [menu, setMenu] = useState<IMenuData>();
//     const [sidebarMobileOpen, setSidebarMobileOpen] = useState<boolean>(sidebarMobile);

//     useEffect(() => {
//         setSidebarMobileOpen(sidebarMobile);
//     }, [sidebarMobile]);

//     useEffect(() => {
//         !sidebarMobileOpen && sidebarMobileClose();
//     }, [sidebarMobileOpen]);

//     useEffect(() => {
//         let menuTemp = [];
//         const newMenu: IMenuData = { ...menu };

//         menuTemp = [{ text: 'Ana Sayfa', icon: 'fa-home-lg', link: `home` }];

//         newMenu.baseMenu = menuTemp;
//         setMenu(newMenu);
//     }, [sidebarMobileOpen]);

//     const renderContentMenu = (data: IBaseMenu[] | any, isChild = false) => {
//         if (data && data.length) {
//             return data.map((item: IBaseMenu, i: number) => {
//                 const roles: number[] = getSessionStorageItem('cdpuser')?.Permission;
//                 if (roles && roles.length > 0 && roles.findIndex((x) => x === item.role) === -1) return null;
//                 const itemUrl = item.link.replace(/^\//, '');
//                 return (
//                     <Fragment key={`base-menu-${i}`}>
//                         <li className={isChild ? 'child-menu' : ''}>
//                             <Link
//                                 className={router.pathname.includes(itemUrl) ? ' active' : ''}
//                                 href={item.link}
//                                 onClick={(e: any) => {
//                                     if (item.onClick) {
//                                         e.preventDefault();
//                                         item.onClick();
//                                     }
//                                 }}>
//                                 {item.icon ? (
//                                     <div className="icon">
//                                         <i className={`fal ${item.icon} fa-fw`} />
//                                     </div>
//                                 ) : null}
//                             </Link>
//                         </li>
//                         {url[1] && item.children && item.children.length && renderContentMenu(item.children, true)}
//                     </Fragment>
//                 );
//             });
//         }
//         return null;
//     };
//     const renderUserMenu = () => {
//         if (menu && menu.otherMenu) {
//             return menu.otherMenu.map((item: IOtherMenu, i: number) => {
//                 const roles: number[] = getSessionStorageItem('cdpuser')?.Permission;
//                 if (roles && roles.length > 0 && roles.findIndex((x: number) => x === item.role) === -1) return null;

//                 return (
//                     <Fragment>
//                         <li key={`other-menu-${i}`} className="other-menu">
//                             <Link
//                                 className={item.link === router.pathname ? ' active' : ''}
//                                 href={item.link}
//                                 onClick={(e: any) => {
//                                     if (item.onClick) {
//                                         e.preventDefault();
//                                         item.onClick();
//                                     }
//                                 }}>
//                                 <div className="icon">
//                                     <i className={`fa fa-circle fa-fw`} />
//                                 </div>
//                                 <div className="link">{item.text}</div>
//                             </Link>
//                         </li>
//                     </Fragment>
//                 );
//             });
//         }
//         return null;
//     };

//     const renderSideBar = () => {
//         return (
//             <aside className={`${sidebarMobileOpen ? 'mobile-open' : ''}`}>
//                 <ul>{renderContentMenu(menu?.baseMenu, false)}</ul>
//                 <ul className="other-menu">{renderUserMenu()}</ul>
//             </aside>
//         );
//     };

//     return (
//         <>
//             {renderSideBar()}
//             <Backdrop
//                 open={sidebarMobileOpen}
//                 style={{ zIndex: 3, backgroundColor: 'rgba(0,0,0, 0.3' }}
//                 onClick={() => setSidebarMobileOpen(true)}
//             />
//         </>
//     );
// });



type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar
