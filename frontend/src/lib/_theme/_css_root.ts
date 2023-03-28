
import { colors } from './_color';
export const getRootStyle = (): object => {
    return {
        ':root': {
            //------------------------------------            //COLOR PALETTE            //------------------------------------            
            ...colors,
            //------------------------------------            //GAP            //------------------------------------            
            '--gap-5': '5px',
            '--gap-10': '10px',
            '--gap-15': '15px',
            '--gap-20': '20px',
            '--gap-25': '25px',
            '--gap-30': '30px',
            //------------------------------------            //BORDER RADIUS            //------------------------------------           
             '--border-radius': '8px',
            '--border-radius-1': '1px',
            '--border-radius-2': '2px',
            '--border-radius-3': '3px',
            '--border-radius-4': '4px',
            '--border-radius-5': '5px',
            '--border-radius-6': '6px',
            '--border-radius-7': '7px',
            '--border-radius-8': '8px',
            '--border-radius-9': '9px',
            '--border-radius-10': '10px',
            '--border-radius-full': '100px',
            //------------------------------------            //SHADOW            //------------------------------------           
             '--shadow-1': 'rgba(0, 0, 0, 0.1)',
            '--shadow-2': 'rgba(0, 0, 0, 0.2)',
            '--shadow-3': 'rgba(0, 0, 0, 0.3)',
            '--shadow-4': 'rgba(0, 0, 0, 0.4)',
            '--shadow-5': 'rgba(0, 0, 0, 0.5)',
            '--shadow-6': 'rgba(0, 0, 0, 0.6)',
            '--shadow-7': 'rgba(0, 0, 0, 0.7)',
            '--shadow-8': 'rgba(0, 0, 0, 0.8)',
            '--shadow-9': 'rgba(0, 0, 0, 0.9)',
            '--shadow-10': 'rgba(0, 0, 0, 1)',
            '--shadow-inset': 'rgba(255, 255, 255, 0.5)',
            //------------------------------------            //FONT FAMILY            //------------------------------------            // '--font-family-open-sans': OpenSans,            //------------------------------------            //BOX SHADOW            //------------------------------------           
             '--border-style': '1px solid rgba(0, 0, 0, 0.05)',
            '--border-style-50': '1px solid var(--color-grey-50)',
            '--border-style00': '1px solid var(--color-grey-100)',
            //------------------------------------            //COLOR            //------------------------------------            
            '--color-blue': 'var(--color-blue-700)',
            '--color-text': '#black',
            '--color-icon': '#292d31',
            //------------------------------------            //Z INDEX            //------------------------------------            
            '--z-index-header': 5,
            '--z-index-sidebar': 4,
            //------------------------------------            //BOX SHADOW            //------------------------------------            
            '--box-shadow-1': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
            '--box-shadow-2':
                '0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1), inset 0 0 0 1px var(--shadow-inset)',
            '--box-shadow-3': '0 1px 2px var(--shadow-2)',
            //------------------------------------            //BODY            //------------------------------------            
            '--body-bg': 'var(--color-grey-50)',
            '--body-font-size': '14px',
            //------------------------------------            //MODAL            //------------------------------------            
            '--modal-header-height': '60px',
            //------------------------------------            //FORM FIELD            //------------------------------------            
            // For Theme Design Default            
            '--field-font-size': '14px',
            '--field-label-font-size': '14px',
            '--button-font-size': '14px',
            // For Theme Design SET            
            [`--field-height-${'x'}`]: '20px',
            [`--field-font-size-${'x'}`]: '11px',
            [`--field-label-font-size-${'x'}`]: '12px',
            [`--field-label-width-${'x'}`]: '175px',
            [`--field-border-radius-${'x'}`]: '2px',
            [`--button-font-size-${'x'}`]: '13px',
        },
    };
};