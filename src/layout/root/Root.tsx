import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import "./index.css";

const Root = () => {
    return (
        <div className={"main"}>
            <Sidebar/>
            <div className={"main_content"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;