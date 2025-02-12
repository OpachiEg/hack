import React, {CSSProperties} from 'react';
import {TbSearch} from "react-icons/tb";
import "./index.css";

interface Props {
    placeholder: string,
    style?: CSSProperties,
    onChange?: (value: string) => void
}

const CustomInput: React.FC<Props> = ({placeholder, style, onChange}) => {
    return (
        <div className={"a-opacity cus-input"}>
            <TbSearch size={"18px"}/>
            <input
                style={style}
                onChange={(e) => {
                    if(onChange) onChange(e.target.value);
                }}
                placeholder={placeholder}
            />
        </div>
    );
};

export default CustomInput;