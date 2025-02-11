import React from 'react';
import {TbSearch} from "react-icons/tb";
import "./index.css";

interface Props {
    placeholder: string
}

const CustomInput: React.FC<Props> = ({placeholder}) => {
    return (
        <div className={"cus-input"}>
            <TbSearch size={"18px"}/>
            <input onChange={(e) => {
            }} placeholder={placeholder}/>
        </div>
    );
};

export default CustomInput;