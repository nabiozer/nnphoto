import { FC, forwardRef, useRef } from 'react';
import Scrollbar from 'react-custom-scrollbars-2';
import { manageClassNames } from '../../../_utility/utiliy';
import Box from '../Box';

import { ICustomScrollbarProps } from './type';

const CustomScrollbar: FC<ICustomScrollbarProps> = forwardRef(
    ({
        children,
        className,
        autoHide = true,
        height,
        width,
        thickness = 6,
        borderRadius = 3,
        thumbProps,
        trackProps,
        viewProps,
        style,
        onScroll,
        onScrollStart,
        onScrollStop,
        ...rest }: ICustomScrollbarProps, ref) => {
        const scrollRef: any = useRef();

        return (
            <Scrollbar
                ref={ref || scrollRef}
                className={manageClassNames('custom-scrollbar', { [`${className}`]: Boolean(className) })}
                autoHide={autoHide}
                allowFullScreen
                style={{ ...style, height: height, width: width }}
                renderView={(props) => {
                    return <Box {...props} className="custom-scrollbar-wrapper" sx={viewProps?.sx} />;
                }}
                renderThumbVertical={(props) => {
                    return (
                        <Box
                            component="div"
                            className="thumb-vertical"
                            bgcolor={(theme: any) => theme.palette.primary.light}
                            borderRadius="inherit"
                            {...props}
                            sx={[{ cursor: 'pointer' }, thumbProps?.sx]}
                            zIndex={(theme: any) => theme.zIndex.appBar}
                        />
                    );
                }}
                renderThumbHorizontal={(props) => {
                    return (
                        <Box
                            component="div"
                            className="thumb-horizontal"
                            bgcolor={(theme: any) => theme.palette.primary.light}
                            borderRadius="inherit"
                            {...props}
                            sx={[{ cursor: 'pointer' }, thumbProps?.sx]}
                            zIndex={(theme: any) => theme.zIndex.appBar}
                        />
                    );
                }}
                renderTrackVertical={(props) => {
                    return (
                        <Box
                            component="div"
                            className="track-vertical"
                            borderRadius={borderRadius}
                            width={`${thickness}px !important`}
                            top={2}
                            bottom={2}
                            right={1}
                            {...props}
                            sx={trackProps?.sx}
                            zIndex={(theme: any) => theme.zIndex.appBar}
                        />
                    );
                }}
                renderTrackHorizontal={(props) => {
                    return (
                        <Box
                            component="div"
                            className="track-horizontal"
                            borderRadius={borderRadius}
                            height={`${thickness}px !important`}
                            width={width}
                            left={2}
                            bottom={1}
                            {...props}
                            sx={trackProps?.sx}
                            zIndex={(theme: any) => theme.zIndex.appBar}
                        />
                    );
                }}
                onScroll={(e) => {
                    onScroll && onScroll(e, ref ? (ref as any)?.current?.getValues() : scrollRef?.current?.getValues());
                }}
                onScrollStart={() => {
                    onScrollStart &&
                        onScrollStart(ref ? (ref as any)?.current?.getValues() : scrollRef?.current?.getValues());
                }}
                onScrollStop={() => {
                    onScrollStop &&
                        onScrollStop(ref ? (ref as any)?.current?.getValues() : scrollRef?.current?.getValues());
                }}
                {...rest}>
                {children}
            </Scrollbar>

        )


    }

);

CustomScrollbar.defaultProps = {
    autoHideDuration: 200,
    autoHideTimeout: 1000,
    autoHide: true,
    thickness: 6,
    borderRadius: 3
}


export default CustomScrollbar;