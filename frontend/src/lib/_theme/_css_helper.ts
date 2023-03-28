
import { GlobalFont } from './_css_global';
import { palette } from './_palette';
export const getHelpers = (): any => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
    '.tooltip-child-wrapper': {
        '&:not(.keyboard-tooltip-control)': {
            display: 'inline',
        },
    },
    //froala 
       '.fr-popup': {
        '.fr-buttons': {
            fontFamily: GlobalFont,
            padding: '2px',
            color: palette.primary.main,
            '.fr-btn': {
                height: '25px !important',
                svg: {
                    margin: '0px 4px',
                    height: '20px !important',
                    path: {
                        fill: palette.primary.main,
                    },
                },
                span: {
                    width: '77px !important',
                    fontSize: `var(--field-label-font-size-${'x'})`,
                },
                ':hover': {
                    background: `${palette.grey[50]}`,
                },
            },
            '.fr-separator.fr-vs': {
                height: '0 !important',
            },
        },
        '& .fr-btn.fr-dropdown:after': {
            top: '12px !important',
            right: '5px !important',
            borderTop: `4px solid ${palette.primary.main}`,
        },
        '& .fr-btn.fr-dropdown.fr-active:after': {
            borderTop: 'none !important',
            borderBottom: `4px solid ${palette.primary.main}`,
        },
        '.fr-dropdown-menu, .fr-dropdown-list': {
            ul: {
                padding: '2px 0',
            },
            li: {
                fontSize: 'var(--field-label-font-size) !important',
                a: {
                    padding: '0px 7px',
                    ':hover': {
                        background: `${palette.grey[50]} !important`,
                    },
                },
                '& a:hover, & a.fr-active, & .fr-active:hover': {
                    background: `${palette.grey[50]} !important`,
                },
            },
        },
        '.fr-dropdown.fr-active': {
            background: `${palette.grey[50]} !important`,
        },
        // popup btn
                '.fr-btn': {
            height: '25px !important',
            svg: {
                margin: '0px 4px',
                height: '20px !important',
                path: {
                    fill: palette.primary.main,
                },
            },
            span: {
                width: '77px !important',
                fontSize: `var(--field-label-font-size-${'x'})`,
            },
            '&.fr-active': {
                '& path': {
                    fill: `${palette.secondary.main} !important`,
                    background: 'red',
                    color: 'red',
                },
            },
        },
        //color selected control 
               '.fr-table-colors': {
            padding: '10px 20px',
        },
        '.fr-color-SET': {
            '& .fr-active-item': {
                border: `3px double ${palette.common?.white} !important`,
            },
        },
        '.fr-color-hex-layer': {
            padding: '10px 20px !important',
            '& .fr-input-line': {
                padding: '7px 0 0 !important',
                width: '160px !important',
                input: {
                    height: '30px !important',
                    borderColor: `${palette.primary.main} !important`,
                    ':focus': {
                        borderColor: `${palette.primary.main} !important`,
                    },
                },
                label: {
                    fontFamily: GlobalFont,
                    top: '16px !important',
                    color: `${palette.primary.main} !important`,
                    fontSize: `var(--field-label-font-size-${'x'})`,
                },
                'input.fr-not-empty+label': {
                    top: '2px !important',
                },
            },
            '.fr-action-buttons': {
                width: '58px !important',
                padding: '7px 0 0 !important',
                '.fr-submit': {
                    background: `${palette.secondary.main} !important`,
                    color: `${palette.common?.white} !important`,
                    height: '30px !important',
                    width: '60px !important',
                    fontFamily: GlobalFont,
                    fontSize: `var(--field-label-font-size-${'x'}) !important`,
                },
            },
        },
    },
});