import { FC, useEffect, useRef } from 'react';
import { useController } from 'react-hook-form';
import { FormControl, FormHelperText, Typography,Box } from '@mui/material';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins.pkgd.min.js';
import './helpers/tr.js';
import Froala from 'react-froala-wysiwyg';
import { IRichEditorProps } from './type';
import MuiTextEditorSxProps from './style';
import { calculateEditorContentHeight } from './helpers/action';
import useIsFirstRender from '../../../_hooks/useIsFirstRender';
import useMesasure from '../../../_hooks/useMeasure';
import {default as manageClassNames} from 'classnames'
import { color, toolbarFontFamilyList, toolbarFontSize, toolbarParagraph } from './helpers/font.js';
/* istanbul ignore next*/
const RichEditor: FC<IRichEditorProps> = ({
    charCounterCount = false,
    control,
    disabled,
    fontFamilyList,
    fontSizeList,
    height,
    helperText,
    label,
    name,
    placeholder,
    readOnly,
    required,
    sx,
    toolbar,
}) => {
    const {
        field: { ref, onChange, ...field },
        fieldState: { error },
    } = useController({ name, control });
    const froalaRef = useRef();
    const boxMeasure = useMesasure();
    const isFirstRender = useIsFirstRender();
    const setDocumentHeightCalculation = () => {
        const content: any = (froalaRef?.current as any)?.editor?.$wp;
        const codeView: any = (froalaRef?.current as any)?.editor?.$oel;
        const charCounterCountView: any = (froalaRef?.current as any)?.editor?.$second_tb;
        if (content?.length & charCounterCountView?.length) {
            codeView && charCounterCountView[0]?.setAttribute('style', 'display:block;');
        }
        if (content?.length) {
            content[0]?.setAttribute(
                'style',
                `display: block; height: ${calculateEditorContentHeight(height, froalaRef, charCounterCount)}`,
            );
        }
    };
    const timeoutHeightCalculation = () => {
        const timeOut = setTimeout(() => {
            setDocumentHeightCalculation();
        }, 500);
        return () => {
            clearTimeout(timeOut);
        };
    };
    useEffect(() => {
        if ((froalaRef?.current as any)?.editor?.$tb) {
            setDocumentHeightCalculation();
        } else {
            timeoutHeightCalculation();
        }
        // eslint-disable-next-line 
    }, [boxMeasure?.values?.height, boxMeasure?.values?.width]);
    useEffect(() => {
        !isFirstRender && onChange(field.value === '<p></p>' ? '' : field.value);
        // eslint-disable-next-line
    }, [field.value]);
    return (
        <FormControl sx={{ ...sx, width: '100%' }} error={Boolean(error?.message)}>
            <Box component="fieldset" height={height}
                ref={boxMeasure.ref}
                className={manageClassNames({ error: Boolean(error?.message) })}
                sx={{
                    ...(MuiTextEditorSxProps({

                        height,
                        froalaRef,
                    }) as any),
                    ...sx,
                }}>                {label && <Typography component="legend">{required ? `${label} *` : label}</Typography>}
                <Froala                    {...field}
                    ref={froalaRef as any}
                    model={field.value}
                    onModelChange={onChange}
                    tag="textarea" config={{
                        language: 'tr',
                        placeholderText: placeholder,
                        quickInsertEnabled: false,
                        events: {
                            'buttons.refresh': () => {
                                setDocumentHeightCalculation();
                            },
                            initialized: function () {
                                (readOnly || disabled) && (this as any)?.edit?.off();
                            },
                        },
                        toolbarButtons: {
                            inlineMode: false,
                            toolbarSticky: false,
                            spellcheck: true,
                            moreText: {
                                buttons: toolbar ? toolbar : [
                                    'Yeni Belge',
                                    'undo',
                                    'redo',
                                    'fontFamily',
                                    'fontSize',
                                    'paragraphFormat',
                                    'bold',
                                    'italic',
                                    'underline',
                                    'strikeThrough',
                                    'subscript',
                                    'superscript',
                                    'specialCharacters',
                                    'clearFormatting',
                                    'textColor',
                                    'backgroundColor',
                                    'lineHeight',
                                    'quote',
                                ],
                                buttonsVisible: toolbar ? toolbar.length : 99,
                            },
                            moreRich: !toolbar && {
                                buttons: [
                                    'formatOL',
                                    'formatUL',
                                    'alignLeft',
                                    'alignCenter',
                                    'alignRight',
                                    'alignJustify',
                                    'html',
                                    'insertLink',
                                    'insertTable',
                                    'insertHR',
                                    'print',
                                ],
                                buttonsVisible: 13,
                            },
                        },
                        charCounterCount: charCounterCount,
                        codeViewKeepActiveButtons: ['selectAll'],
                        fontFamily: fontFamilyList || toolbarFontFamilyList,
                        fontSize: fontSizeList || toolbarFontSize,
                        paragraphFormat: toolbarParagraph,
                        tableEditButtons: [
                            'tableHeader',
                            'tableRows',
                            'tableColumns',
                            'tableCells',
                            'tableCellHorizontalAlign',
                            'tableCellBackground',
                            'tableRemove',
                        ],
                        imageDefaultDisplay: 'inline',
                        imageEditButtons: ['imageAlign', 'imageDisplay', 'imageRemove'],
                        imageInsertButtons: ['imageUpload'],
                        linkEditButtons: ['linkRemove'],
                        linkInsertButtons: ['linkBack'],
                        wordDeniedAttrs: ['width'],
                        wordPasteModal: false,
                        fontSizeSelection: true,
                        fontFamilySelection: true,
                        paragraphFormatSelection: true,
                        colorsText: color,
                        colorsBackground: color,
                        tableColors: color,
                    }}
                />            </Box>
            {(error?.message || helperText) && (
                <FormHelperText sx={{
                    fontSize:
                        'calc(var(--field-label-font-size))'
                }}>                    {error?.message || helperText}
                </FormHelperText>)}
        </FormControl>);
};
export default RichEditor