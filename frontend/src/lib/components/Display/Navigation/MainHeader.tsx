import { useRouter } from 'next/router';
import React from 'react';

type mainProps = {
    children?: React.ReactNode;
};

const MainHeader = ({ children }: mainProps) => {
    const router = useRouter();
    const isHome = router.pathname === '/';
    console.log(router.pathname)
    return <header className="main-header" style={!isHome ? {background:'#2c3531', position: 'sticky'} :{}}>{children}</header>;
};

export default MainHeader;
