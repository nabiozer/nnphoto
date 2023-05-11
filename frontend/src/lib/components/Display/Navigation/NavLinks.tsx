
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import Button from "../../Form/Button";
import NavLink from "./NavLink";

import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { logout } from '../../../../store/user/userActions';



const NavLinks = () => {

    const router = useRouter()
    const userInfo = useSelector((state: RootState) => state?.user?.userLogin?.data);
    const dispatch = useAppDispatch();

    const [user, setUser] = useState<any>(null)

    useEffect(() => setUser(userInfo), [userInfo])
    
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
                <NavLink href="/gallery" text='Fotoğraflar' />
            </li>
            <li>
                <NavLink href="/videos" text='Videolar' />
            </li>
            <li>
                <NavLink href="/contact" text='İletişim' />
            </li>
            {user ? (
                <>
                    <li className="dropdown">
                        {user?.isAdmin ? (
                            <NavLink href="/dashboard" text='Admin' />
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
