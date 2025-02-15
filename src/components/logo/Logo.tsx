import React from 'react';
import "./index.css";
import logo from "../../assets/image/logo.png";

const Logo = () => {
    return (
        <div className={"app-logo"}>
            <div className={"app-logo_container"}>
                <img src={logo}/>
                <h3>УУНиТ</h3>
            </div>
        </div>
    );
};

export default Logo;