import { Breadcrumbs } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import useTitle from '../../../_hooks/useTitle';


interface IBreadcrumbs {
    text: string;
    link: string;
}

interface IProps {
    title?: any;
    titleView?: boolean;
    subTitle?: string;
    className?: string;
    breadCrumbs?: IBreadcrumbs[];
    breadCrumbsMax?: number;
    topContent?: React.ReactNode;
    bottomLeftContent?: React.ReactNode;
    bottomRightContent?: React.ReactNode;
    breadCrumbHomeText?: boolean;
    breadCrumbHomeDisabled?: boolean;
}

 //eslint-disable-next-line 
export default (props: IProps) => {
    const navigate = useNavigate();
    const {
        title,
        titleView = true,
        subTitle,
        className,
        breadCrumbs,
        breadCrumbsMax,
        topContent,
        bottomLeftContent,
        bottomRightContent,
        breadCrumbHomeText,
        breadCrumbHomeDisabled,
    } = props;

    useTitle(title || 'app name');

    const renderBreadCrumb = () => {
        if (breadCrumbs?.length) {
            return (
                <Breadcrumbs maxItems={breadCrumbsMax || 5} className="custom-breadcrumb">
                    {!breadCrumbHomeDisabled && (
                        <Link
                            to="/"
                            onClick={(e: any) => {
                                e.preventDefault();
                                navigate('/');
                            }}>
                            {' '}
                            {breadCrumbHomeText ? 'Ana Sayfa' : <i className="fal fa-home"></i>}
                        </Link>
                    )}
                    {breadCrumbs.map((item: IBreadcrumbs, i: number) => {
                        if (item?.link) {
                            return (
                                <Link
                                    to="/"
                                    key={`breadcrumb-${i}`}
                                    onClick={(e: any) => {
                                        e.preventDefault();
                                        item.link && navigate(item.link);
                                    }}>
                                    {' '}
                                    {item.text}
                                </Link>
                            );
                        } else {
                            return <p key={`breadcrumb-${i}`}>{item.text}</p>;
                        }
                    })}
                </Breadcrumbs>
            );
        }

        return null;
    };

    return (
        <div className={`custom-title-container ${className || ''}`}>
            <div className="title-nav">
                {(title || subTitle) && titleView && (
                    <div className="left pl-3">
                        {renderBreadCrumb()}
                        {title && <h1>{title}</h1>}
                        {subTitle && <h6>{subTitle}</h6>}
                    </div>
                )}
                {topContent && <div className="right pl-3 pr-3">{topContent || null}</div>}
            </div>
            {(bottomLeftContent || bottomRightContent) && (
                <div className="title-tab">
                    {bottomLeftContent && <div className="left pl-3 pr-3">{bottomLeftContent || null}</div>}
                    {bottomRightContent && <div className="left pl-3 pr-3">{bottomRightContent || null}</div>}
                </div>
            )}
        </div>
    );
};
