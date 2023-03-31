import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  const router = useRouter();

  const isActive = router.asPath === href;


  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (router.pathname !== href) {
      router.push(href);
    }
  };

  return (
    <Link href={href} legacyBehavior style={{color:'white !important'}} >
      <a className={isActive ? 'nav-link active' : 'nav-link'} onClick={handleClick} >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;