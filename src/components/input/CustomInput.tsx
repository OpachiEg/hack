import React, {CSSProperties} from 'react';
import {TbSearch} from "react-icons/tb";
import "./index.css";

interface Props {
    placeholder: string,
    style?: CSSProperties
}

const CustomInput: React.FC<Props> = ({placeholder,style}) => {
    return (
        <div className={"a-opacity cus-input"}>
            <TbSearch size={"18px"}/>
            <input style={style} onChange={(e) => {
            }} placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;