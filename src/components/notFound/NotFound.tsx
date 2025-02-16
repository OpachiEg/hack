import React from 'react';
import "./index.css";
import Logo from "../logo/Logo";

const NotFound = () => {
    return (
        <div className={"not-found"}>
            <Logo/>
            <h3>Страница не найдена</h3>
        </div>
    );
};

export default NotFound;