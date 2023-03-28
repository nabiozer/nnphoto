
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import NavLink from "./NavLink";
import Button from "../../Form/Button";

import { useRouter } from "next/router";
import { logout } from '../../../../store/userActions';
import { useAppDispatch } from '../../../../store';



const NavLinks = () => {

    const router = useRouter()
    const dispatch=useAppDispatch();
    
    const logoutHandler = () => {
        dispatch(logout());
        router.push("/login");
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
            {true ? (
                <>
                <li className="dropdown">
                    {!true ? (
                         <NavLink href="/Profile" text='Pricing' />
                    ) : (
                        <NavLink href="/Login" text='Giriş' />
                    )}
                </li>
                <li>
                       <Button text = "Çıkış" onClick={logoutHandler} variant="outlined"/>
                </li>
                </>
            ) : (
                <li>
                    <NavLink href="/Login" text='Pricing' />
                </li>
            )}

            <li></li>
        </ul>
    );
};

export default NavLinks;
