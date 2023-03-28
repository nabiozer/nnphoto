import { useRouter } from "next/router";
import { FC, useEffect } from "react";



export interface IScrollPageTopProps {
    children:any;
    scrollElement:string | null;
}

const ScrollPageTop :FC<IScrollPageTopProps> = ({children,scrollElement}) => {
    const router :any = useRouter();

    useEffect(() => {
        if(scrollElement) {
            const element :any = document.getElementById(scrollElement);
            element?.scrollIntoView({block:'start',behavior:'smooth'});
        }
    },[router.pathname,scrollElement])

    return children || null;
}

ScrollPageTop.defaultProps = {
    scrollElement:'root',
}

export default ScrollPageTop;