import { SxProps, Theme } from "@mui/material";
import { calculateEditorContentHeight } from "../../../_helpers/actions";
import { GlobalFont } from "../../../_theme/_css_global";

import { IRichEditorProps } from "./type";

interface IParams extends Pick<IRichEditorProps, "height"> {
  froalaRef?: any;
}
/* istanbul ignore next*/
const MuiTextEditorSxProps = ({
  height,
  froalaRef,
}: IParams): SxProps<Theme> => ({
  position: "relative",
  border: (theme) => `1px solid ${theme.palette.grey?.[100]}`,
  borderRadius: "var(--border-radius-5)",
  margin: 0,
  padding: "0px 8px",
  "& > legend": (theme) => ({
    fontSize: `var(--field-label-font-size-${"x"})`,
    color: theme.palette.grey?.[500],
    margin: "0 10px",
    padding: "0 5px",
  }),
  ".fr-code-view": {
    ".fr-wrapper": {
      height:
        froalaRef?.current?.editor?.$tb &&
        froalaRef?.current?.editor?.$tb.length
          ? `${calculateEditorContentHeight(
              height,
              froalaRef,
              false
            )} !important`
          : 0,
    },
  },
  ".fr-box": (theme) => ({
    ".fr-element, .fr-counter, .fr-btn, .fr-code, label, & .fr-submit, input, .fr-action-buttons, .fr-image-upload-layer, .fr-file-upload-layer, & .fr-message, & .fr-special-character-category, & .fr-special-character, & .fr-submit, .fr-layer.fr-color-hex-layer label, & .fr-table-size .fr-table-size-info":
      {
        fontSize: `var(--field-label-font-size-${"x"})!important`,
        fontFamily: GlobalFont,
        color: theme.palette.primary.main,
      },
    ".fr-toolbar": {
      position: "sticky",
      zIndex: "9999",
    },
    ".fr-toolbar, .fr-wrapper, .fr-second-toolbar": {
      border: "none",
    },
    ".fr-btn-grp": {
      margin: "5px 0 5px 0",
      borderRadius: "var(--border-radius-5)",
      "button:hover": {
        background: theme.palette.grey[50],
      },
      ".fr-active svg path": {
        fill: `${theme.palette.secondary.main} !important`,
      },
      "& .fr-btn-active-popup:hover, & .fr-btn-active-popup, & .fr-dropdown.fr-active, & .fr-dropdown.fr-active:hover":
        {
          background: theme.palette.grey[50],
        },
    },
    //expanded more toolbar
    ".fr-more-toolbar": {
      background: theme.palette.grey[50],
    },
    ".fr-expanded": {
      height: "35px !important",
    },
    //dropdown
    "& .fr-btn.fr-dropdown:after": {
      top: "12px",
      right: "6px",
      borderTop: `4px solid ${theme.palette.primary.main}`,
    },
    "& .fr-btn.fr-dropdown.fr-active:after": {
      borderTop: "none !important",
      borderBottom: `4px solid ${theme.palette.primary.main}`,
    },
    ".fr-dropdown-menu, .fr-dropdown-list": {
      ".fr-dropdown-wrapper": {
        ul: {
          padding: "2px 0",
        },
        "& li": {
          fontSize: `var(--field-label-font-size-${"x"}) !important`,
          a: {
            padding: "0px 20px",
          },
        },
        "& a:hover, & a.fr-active, & .fr-active:hover": {
          background: `${theme.palette.grey[50]} !important`,
        },
      },
    },
    //line breaker button
    ".fr-line-breaker , .fr-insert-helper": {
      "a.fr-floating-btn": {
        margin: "0px 7px",
        height: "25px !important",
        width: "25px !important",
        svg: {
          margin: 0,
          path: {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
    //popup
    ".fr-popup": {
      ".fr-table-size": {
        margin: "20px",
      },
      // general popup design
      input: {
        height: "46px",
        border: `1px solid ${theme.palette.primary.main}`,
        ":focus": {
          border: `1px solid ${theme.palette.primary.main}`,
        },
        ":checked+span": {
          background: theme.palette.secondary.main,
        },
      },
      label: {
        top: "28px",
      },
      ".fr-action-buttons": {
        padding: "15px 11px",
      },
      ".fr-link-insert-layer .fr-submit": {
        background: theme.palette.secondary.main,
        color: theme.palette.common.white,
        height: "40px !important",
        width: "60px !important",
        padding: "10px",
        borderRadius: "var(--border-radius-4)",
        boxShadow: "1px 3px 4px 0 var(--shadow-1)",
        ":hover": {
          background: theme.palette.secondary.dark,
          color: theme.palette.common.white,
        },
      },
      "& .fr-input-line": {
        padding: "15px 0",
        "input.fr-not-empty+label": {
          top: 8,
        },
      },
      ".fr-buttons, button:hover": { background: theme.palette.grey?.[50] },
      //color selected control
      ".fr-tabs .fr-active": {
        paddingBottom: "31px",
      },
      "& .fr-active": {
        paddingBottom: "5px",
      },
      //image
      ".fr-image-upload-layer, .fr-file-upload-layer": {
        padding:  "2px",
        margin:  "9px",
        border: `1px dotted ${theme.palette.primary.main}`,
        ":hover": {
          background: theme.palette.grey?.[50],
          color: theme.palette.primary.main,
        },
      },
      "#imageUpload-1": {
        "svg path": {
          fill: `${theme.palette.primary.main} !important`,
        },
      },
      ".fr-image-progress-bar-layer": {
        padding: "0px",
        margin: "10px",
        ".fr-loader": {
          marginTop: "10px",
          background: theme.palette.secondary[50],
          span: {
            background: theme.palette.green?.main,
          },
        },
      },
      //special character
      ".fr-icon-container": {
        padding: "20px",
      },
      "& .fr-special-character-category:hover, & .fr-special-character:hover": {
        background: theme.palette.grey?.[50],
        color: theme.palette.primary.main,
      },
      "& .fr-special-character-category": {
        paddingBottom: "22px",
        background: theme.palette.grey?.[50],
      },
      "& .fr-special-character": {
        width: "24px",
        height: "24px",
        padding: 0,
        paddingTop: "13px",
      },
    },
    //insert link
    ".fr-link-insert-layer": {
      width: "240px",
      margin: "20px",
      ".fr-checkbox-line": {
        label: {
          fontSize: `var(--field-label-font-size-${"x"})`,
        },
        marginTop: 0,
        ".fr-checkbox": {
          width: "18px",
          height: "18px",
          padding: "6px 3px",
          span: {
            width: "18px",
            height: "18px",
            border: `1px solid ${theme.palette.primary.main}`,
          },
          svg: {
            margin: "3px",
            background: theme.palette.secondary.main,
            path: {
              fill: theme.palette.common.white,
            },
          },
        },
      },
    },
    //table
    ".fr-table-size": {
      margin: "13px",
      ".fr-select-table-size>span.hover>span": {
        background: theme.palette.secondary[50],
        border: `1px solid ${theme.palette.secondary.main}`,
      },
    },
    table: {
      ".fr-selected-cell": {
        border: `1px double ${theme.palette.secondary.main}`,
      },
    },
    "p, td": {
      overflowWrap: "anywhere",
    },
    ".fr-table-resizer div, .fr-line-breaker": {
      border: `1px solid ${theme.palette.secondary[300]}`,
    },
    "#isPasted": {
      width: "100% !important",
    },
    //image
    ".fr-image-resizer": {
      border: `1px solid ${theme.palette.secondary.main}`,
      ".fr-handler": {
        background: theme.palette.secondary.main,
      },
    },
    //content
    ".fr-wrapper, .fr-code": {
      display: "none",
      overflow: "auto",
      overflowWrap: "anywhere",
    },
    ".fr-wrapper": {
      margin: "5px 0",
      background: "transparent",
    },
    ".fr-element": {
      padding: "5px",
    },
    ".fr-btn": {
      height: "40px !important",
      svg: {
        margin: "0px 4px",
        height: "40px !important",
        path: {
          fill: theme.palette.primary.main,
        },
      },
      span: {
        width: "77px !important",
        fontSize: `var(--field-label-font-size-${"x"})`,
      },
    },
    ".fr-placeholder": {
      paddingLeft: "5px",
    },
    //second toolbar
    ".fr-second-toolbar": {
      borderTop: "none",
      display: "none",
      //logo
      "#fr-logo": {
        display: "none",
      },
      ".fr-box .fr-counter": {
        padding: "5px !important",
      },
    },
    // basic css
    "ol,ul": {
      display: "block",
      marginTop: "0px !important",
      marginBottom: "1em",
      marginLeft: "0",
      marginRight: "0",
      paddingLeft: "40px",
    },
    ol: {
      listStyleType: "decimal",
    },
    ul: {
      listStyleType: "disc",
    },
    li: {
      marginBottom: "0.5rem",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: "10px",
      marginBottom: "10px",
      fontWeight: "bold",
      display: "block",
    },
    h1: {
      fontSize: "2em",
    },
    h2: {
      fontSize: "1.5em",
    },
    h3: {
      fontSize: "1.17em",
    },
    sup: {
      verticalAlign: "super",
    },
    sub: {
      verticalAlign: "sub",
    },
    blockquote: {
      border: "none !important",
      borderLeft: `1px solid ${theme.palette.secondary.main} !important`,
      color: `${theme.palette.primary.main}`,
    },
    "td,th,blockquote,hr": {
      border: `1px solid ${theme.palette.grey[100]}`,
    },
  }),
  "&.error": {
    "> legend": {
      color: (theme) => theme.palette.error.main,
    },
    borderColor: (theme) => theme.palette.error.main,
  },
});
export default MuiTextEditorSxProps;
