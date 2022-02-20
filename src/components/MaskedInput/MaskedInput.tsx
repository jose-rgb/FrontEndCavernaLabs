import ReactInputMask from "react-input-mask"



export function MaskedInput({value, onChange}) {


    return (
        <ReactInputMask  mask="9999-9999-9999-9999" value={value} onChange={onChange}/>
    ) 
}