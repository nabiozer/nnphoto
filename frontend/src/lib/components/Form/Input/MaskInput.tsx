import { forwardRef } from "react";
import { IMaskInput } from "react-imask";



const TextMaskCustom = forwardRef(function TextMaskCustom({ name, onChange, ...rest }: any, ref) {
    return (
        <IMaskInput {...rest} inputRef={ref} onAccept={(value) => onChange({ target: { name, value } })} overwrite />

    );
})

export default TextMaskCustom;