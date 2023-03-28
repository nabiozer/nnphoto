import '@fontsource/source-sans-pro';
export const GlobalFont = 'Source Sans Pro';
export const getCssGlobal = (): object => {
    return {
        root: {
            height: '100%',
            display: 'flex',
            flexGrow: 1,
        },
        html: {
            width: '100%',
            padding: 0,
            margin: 0,
            position: 'relative',
        },
        body: {
            color: 'var(--color-text)',
            padding: 0,
            margin: 0,
            width: '100%',
            height: '100vh',
            fontSize: 'var(--font-size-body)',
            lineHeight: 1.2,
            position: 'relative',
            fontStyle: 'normal',
            fontFamily: GlobalFont,
            fontWeight: 400,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            background: 'var(--color-grey-50)',
            overflowX: 'hidden',
            '& p': {
                color: 'var(--color-text)',
            },
            '& a': {
                color: 'var(--color-text)',
                '&:hover': {
                    color: 'var(--color-text)',
                },
            },
            '& legend': {
                width: 'auto',
                whiteSpace: 'normal',
            },
        },
        form: {
            width: '100%',
        },
    };
};