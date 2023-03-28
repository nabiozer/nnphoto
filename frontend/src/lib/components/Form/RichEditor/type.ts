import { SxProps, Theme } from '@mui/material';
import { ICommonFieldProps } from '../commonTypes';
export enum RichEditorToolbarItemEnum {
    AlignCenter = 'alignCenter',
    AlignJustify = 'alignJustify',
    AlignLeft = 'alignLeft',
    AlignRight = 'alignRight',
    BackgroundColor = 'backgroundColor',
    Bold = 'bold',
    ClearFormatting = 'clearFormatting',
    FontFamily = 'fontFamily',
    FontSize = 'fontSize',
    FormatOL = 'formatOL',
    FormatUL = 'formatUL',
    Html = 'html',
    InsertImage = 'insertImage',
    InsertLink = 'insertLink',
    Italic = 'italic',
    LineHeight = 'lineHeight',
    ParagraphFormat = 'paragraphFormat',
    Print = 'print',
    Quote = 'quote',
    SelectAll = 'selectAll',
    SpecialCharacters = 'specialCharacters',
    StrikeThrough = 'strikeThrough',
    Subscript = 'subscript',
    Superscript = 'superscript',
    TextColor = 'textColor',
    Underline = 'underline',
    Undo = 'undo',
}
export type RichEditorToolbarItemType = `${RichEditorToolbarItemEnum}`;
export interface IRichEditorProps extends Pick<ICommonFieldProps, 'helperText' | 'name' | 'control' > {
    charCounterCount?: boolean;
    disabled?: boolean;
    fontFamilyList?: object;
    fontSizeList?: number[];
    height: string | number;
    label?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    sx?: SxProps<Theme>;
    toolbar?: RichEditorToolbarItemType[];
    helperText?:any
}