import React from "react";
import "../assets/_CSS/textInput.css" 
import InputMask from 'react-input-mask';

interface TextInputProps{
    placeholder? : string;
    mask: string
    type: string
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>   
    id? : string 
}

const Text_input_login : React.FC<TextInputProps> = (props) => {
    return(
        <>
        <InputMask 
        id={props.id}
        type={props.type} 
        mask={props.mask} 
        placeholder={props.placeholder} 
        value={props.value} onChange={props.onChange}></InputMask>
        </>
    );
}

export default Text_input_login;