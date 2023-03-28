import { Components } from "@mui/material";


export const MuiBreadcrumbsTheme:Components ={
    MuiBreadcrumbs:{
        styleOverrides:{
            root:{
                fontSize: 'var(--field-label-font-size',
                '& breadcrumbs-cursor':{
                    cursor:'pointer',
                },

                '& .MuiTypography-root':{
                    fontSize: 'var(--field-label-font-size)',
                    display: 'flex',
                    alignItems:'center',
                    '& .open':{
                        transform:'rotate(90deg)',
                        transition:'all .1s linear',
                    },

                    '& .open:focus':{
                        transform:'rotate(0deg)',
                       
                    },
                    '& .close':{
                        transform:'rotate(0deg)',
                        transition:'all .1s linear',
                    },
                    '& .close:focus':{
                        transform:'rotate(90deg)',
                       
                    },
                },
                a:{
                    display:'flex',
                    alignItem :'center'
                }
            },
           
            
        }
    }

}