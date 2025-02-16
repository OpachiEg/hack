import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./index.css";
import SidebarItem from "./sidebarItem/SidebarItem";
import {TbBook, TbBriefcase2, TbBuildingBank, TbCalendarWeek, TbMessageChatbot, TbSmartHome} from "react-icons/tb";
import Logo from "../logo/Logo";
import {TbMenu2} from "react-icons/tb";
import {AuthContext, AuthContextProps} from "../../provider/AuthProvider";
import {API} from "../../service/api";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {

    const navigate = useNavigate();

    const {setCurrentUser, currentUser} = useContext(AuthContext);

    const [showSidebar, setShowSidebar] = useState(true);

    const closeSidebar = useCallback(() => setShowSidebar(false), []);

    useEffect(() => {
        API.getUserShortInfo().then(({data}) => {
            setCurrentUser(data);
        })
    }, []);

    const logout = useCallback(() => {
        setCurrentUser(null);
        navigate("/login");
        localStorage.removeItem("token");
    },[currentUser]);

    return (
        <>
            <div className={"sb-header"}>
                <div className={"sb-header_bg"}>
                    <button onClick={() => setShowSidebar(!showSidebar)}><TbMenu2 size={"25px"}/></button>
                </div>
            </div>

            <div onClick={() => setShowSidebar(false)} className={`sidebar-wrapper ${showSidebar ? "show-sidebar" : "hide-sidebar"}`}>
                <div className={"sidebar"} onClick={(e) => e.stopPropagation()}>
                    <div className={"sidebar-bg"}>
                        <div className={"sidebar_main"}>
                            <Logo/>
                            <div className={"sidebar_delimiter"}/>
                            <div className={"sidebar_menu"}>
                                <SidebarItem closeSidebar={closeSidebar} icon={<TbSmartHome size={"25px"}/>}
                                             text={"Главная"} to={"/"}/>
                                <SidebarItem closeSidebar={closeSidebar} icon={<TbCalendarWeek size={"23px"}/>}
                                             text={"Расписание"} to={"/schedule"}/>
                                <SidebarItem closeSidebar={closeSidebar} icon={<TbBook size={"23px"}/>}
                                             text={"Успеваемость"} to={"/progress"}/>
                                <SidebarItem closeSidebar={closeSidebar} icon={<TbBriefcase2 size={"23px"}/>}
                                             text={"Карьера"} to={"/career"}/>
                            </div>
                        </div>
                        {currentUser && <div className={"sidebar_profile"}>
                            <div className={"sidebar_profile_content"}>
                                <img
                                    src={currentUser?.image_url}/>
                                <p>{currentUser?.full_name}</p>
                            </div>
                            <button onClick={logout}><TbLogout size={"20px"}/></button>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;