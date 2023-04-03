
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import NavLink from "./NavLink";
import Button from "../../Form/Button";

import { useRouter } from "next/router";
import { logout } from '../../../../store/user/userActions';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { DropDown } from '../../..';



const NavLinks = () => {

    const router = useRouter()
    const userInfo = useSelector((state: RootState) => state?.user?.userLogin?.data);
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        router.push("/auth/login");
    };


    return (
        <ul className="nav-links">
            <li className="nav-links__social">
                <a
                     href="https://www.instagram.com/nnphotofilm/"
                    target="_blank"
                    rel="noopener">
                    <InstagramIcon />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=905421132503&text&app_absent=0"
                    target="_blank"
                    rel="noopener">
                    <WhatsappIcon />
                </a>
            </li>
            <li>
                <NavLink href="/" text='Ana Sayfa' />
            </li>
            <li>
                <NavLink href="/gallery" text='Çekimlerimiz' />
            </li>
            <li>
                <NavLink href="/about" text='Hakkımızda' />
            </li>

            {userInfo ? (
                <>
                    <li className="dropdown">
                        {userInfo?.isAdmin ? (
                            <NavLink href="/dashboard" text='dashboard' />
                        ) : (
                            <NavLink href="/Profile" text='Profile' />
                        )}
                    </li>
                    <li>
                        <Button text="Çıkış" onClick={logoutHandler} variant="outlined" />
                    </li>
                </>
            ) : (
                <li>
                    <NavLink href="/auth/login" text='Giriş' />
                </li>
            )}

            <li></li>
        </ul>
    );
};

export default NavLinks;
