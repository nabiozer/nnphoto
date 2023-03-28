import { alpha, Components, Theme } from "@mui/material";

const themeConfig = {
  iconButton: {
    small: {
      padding: 4,
    },
    medium: {
      padding: 6,
    },
    large: {
      padding: 8,
    },
  },
  small: {
    minHeight: 32.5,
  },
  medium: {
    minHeight: 36.5,
  },
  large: {
    minHeight: 40.5,
  },
};

export const MuiButtonTheme: Components = {
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        boxShadow: "none",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        fontWeight: "500",
        boxShadow: "none",
        fontSize: "var(--button-font-size)",

        "&.rounded": {
          borderRadius: "var(--border-radius-full !important",
        },

        '&.left-rounded':{
            borderTopLeftRadiues: 'var(--border-radius-full) !important',
            borderBottomLeftRadius:'var(--border-radius-full !important'
        }
      },

      sizeSmall: {
        '.btn-loading':{
            margin:4.25,
            width: 'calc(var(--button-font-size) + 2px) !important',
            height: 'calc(var(--button-font-size) + 2px) !important'
        },

        '&.btn-no-text' :{
            padding: '4px 10px',

            svg:{
                margin: 3.25,
                width: 'calc(var(--button-font-size) + 2px)',
                height: 'calc(var(--button-font-size) + 2px)'
            },
            '.btn-loading' :{
              margin:3.25,
              svg:{
                margin:0
              }
            }
        },

        '&.icon-button' :{
          minWidth:themeConfig.small.minHeight,
          padding: themeConfig.iconButton.small.padding,
        }
      },
      sizeMedium: {
        '.btn-loading':{
            margin:3.75,
            width: 'calc(var(--button-font-size) + 3px) !important',
            height: 'calc(var(--button-font-size) + 3px) !important'
        },

        '&.btn-no-text' :{
            padding: '8px 22px',

            svg:{
                margin: 2.75,
                width: 'calc(var(--button-font-size) + 3px)',
                height: 'calc(var(--button-font-size) + 3px)'
            },
            '.btn-loading' :{
              margin:2.75,
              svg:{
                margin:0
              }
            }
        },

        '&.icon-button' :{
          minWidth:themeConfig.medium.minHeight,
          padding: themeConfig.iconButton.medium.padding,
        }
      },
      sizeLarge: {
        '.btn-loading':{
            margin:3.25,
            width: 'calc(var(--button-font-size) + 4px) !important',
            height: 'calc(var(--button-font-size) + 4px) !important'
        },

        '&.btn-no-text' :{
            padding: '8px 22px',

            svg:{
                margin: 2.25,
                width: 'calc(var(--button-font-size) + 4px)',
                height: 'calc(var(--button-font-size) + 4px)'
            },
            '.btn-loading' :{
              margin:2.25,
              svg:{
                margin:0
              }
            }
        },

        '&.icon-button' :{
          minWidth:themeConfig.large.minHeight,
          padding: themeConfig.iconButton.large.padding,
        }
      },
      outlinedPrimary:({theme}) => ({
        borderColor:(theme as Theme).palette.secondary.main,

        '.btn-loading' :{
          color:(theme as Theme).palette.primary.main,
        },
        '&.Mui-disabled' :{
          color: alpha((theme as Theme).palette.primary.main,0.6),
          borderColor: alpha((theme as Theme).palette.primary.main,0.3),
          '.btn-loading':{
            color: alpha((theme as Theme).palette.primary.light,0.3),
          }
        }
      }),
      outlinedSecondary:({theme}) => ({
        borderColor:(theme as Theme).palette.secondary.main,

        '.btn-loading' :{
          color:(theme as Theme).palette.secondary.main,
        },
        '&.Mui-disabled' :{
          color: alpha((theme as Theme).palette.secondary.main,0.6),
          borderColor: alpha((theme as Theme).palette.secondary.main,0.3),
          '.btn-loading':{
            color: alpha((theme as Theme).palette.green.light,0.3),
          }
        }
      }),
      outlined: ({theme}) => ({
        '&.error': {
          borderColor:(theme as Theme).palette.error.main,
          '.btn-loading':{
            color:(theme as Theme).palette.error.main,
          },

          '&.Mui-disabled' :{
            color: alpha((theme as Theme).palette.error.main,0.6),
            borderColor: alpha((theme as Theme).palette.error.main,0.3),
            '.btn-loading':{
              color: alpha((theme as Theme).palette.error.light,0.3),
            }
          }
        }
      }),
      containedPrimary: ({theme}) => ({
       
          '.btn-loading':{
            color:(theme as Theme).palette.primary.main,
          },

          '&.Mui-disabled' :{
            color: alpha((theme as Theme).palette.common.white,0.6),
            borderColor: alpha((theme as Theme).palette.primary.main,0.4),
            '.btn-loading':{
              color: alpha((theme as Theme).palette.primary.light,0.4),
            }
          }
        
      }),
      containedSecondary: ({theme}) => ({
       
        '.btn-loading':{
          color:(theme as Theme).palette.green.main,
        },

        '&.Mui-disabled' :{
          color: alpha((theme as Theme).palette.common.white, 0.6),
          borderColor: alpha((theme as Theme).palette.secondary.main,0.4),
          '.btn-loading':{
            color: alpha((theme as Theme).palette.green.main,0.4),
          }
        }
      
    }),
    contained: ({theme}) => ({
      '&.error': {
        borderColor:(theme as Theme).palette.error.light,
        '.btn-loading':{
          color:(theme as Theme).palette.error.main,
        },

        '&.Mui-disabled' :{
          color: alpha((theme as Theme).palette.error.main,0.6),
          borderColor: alpha((theme as Theme).palette.error.main,0.4),
          '.btn-loading':{
            color: alpha((theme as Theme).palette.error.light,0.4),
          }
        }
      }
    }),


    
      
    },
  },
};
