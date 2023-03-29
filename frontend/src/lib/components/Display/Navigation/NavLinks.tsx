
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import NavLink from "./NavLink";
import Button from "../../Form/Button";

import { useRouter } from "next/router";
import { logout } from '../../../../store/userActions';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';



const NavLinks = () => {

    const router = useRouter()
    const userInfo = useSelector((state:RootState) => state?.user?.userLogin?.userInfo);
    const dispatch=useAppDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        router.push("/Login");
     };


    return (
        <ul className="nav-links">
            <li className="nav-links__social">
                <a href="https://github.com/nabiozer" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.instagram.com/1095daysjourney/" target="_blank" rel="noreferrer">
                    <WhatsappIcon />
                </a>
            </li>
            <li>
                <NavLink href="/Home" text='Ana Sayfa' />
            </li>
            <li>
                <NavLink href="/Pricing" text='Galeri' />
            </li>
            {userInfo ? (
                <>
                <li className="dropdown">
                    {userInfo?.isAdmin ? (
                         <NavLink href="/Profile" text='Profile' />
                    ) : (
                        <NavLink href="/Profile" text='Profile' />
                    )}
                </li>
                <li>
                       <Button text = "Çıkış" onClick={logoutHandler} variant="outlined"/>
                </li>
                </>
            ) : (
                <li>
                    <NavLink href="/Login" text='Giriş' />
                </li>
            )}

            <li></li>
        </ul>
    );
};

export default NavLinks;
