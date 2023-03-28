import { useEffect, useRef } from 'react';
import Plyr from 'plyr-react';
interface ISource {
    src: string;
    type: 'video/mp4' | 'video/webm' | 'video/avi' | 'video/ogg';
    size?: number;
}

interface IProps {
    height: string | number;
    autoPlay?: boolean;
    autoPause?: boolean;
    sourceType: 'video' | 'audio';
    title?: string;
    poster?: string;
    source: ISource[];
    hideControls?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onPlayer?: (e: any) => void;
}

const Player = (props: IProps) => {
    //eslint-disable-next-line 
    const ref: any = useRef();

    const {
        autoPlay = true,
        autoPause = true,
        source,
        sourceType,
        poster,
        title,
        onPlayer,
        style,
        className,
        hideControls = false,
    } = props;

    useEffect(() => {
        if (ref?.current.plyr) {
            onPlayer && onPlayer(ref.current.plyr);
        }
        //eslint-disable-next-line 
    }, [ref.current]);

    return (
        <div className={`custom-video-plyr ${className || ''}`} style={style}>
            <Plyr
                ref={ref}
                source={{
                    type: sourceType,
                    title: title,
                    sources: source,
                    poster: poster,
                }}
                options={{
                    autoplay: autoPlay,
                    autopause: autoPause,
                    hideControls: hideControls,
                    controls: [
                        'play',
                        'progress',
                        'current-time',
                        'mute',
                        'volume',
                        'settings',
                        'pip',
                        'airplay',
                        'fullscreen',
                        'quality',
                    ],
                    fullscreen: {
                        iosNative: true,
                        allowAudio: true,
                    },
                }}
            />
        </div>
    );
};


export default Player;