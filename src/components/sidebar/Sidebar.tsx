import React from 'react';
import "./index.css";
import SidebarItem from "./sidebarItem/SidebarItem";
import {TbBook, TbBriefcase2, TbBuildingBank, TbCalendarWeek, TbMessageChatbot, TbSmartHome} from "react-icons/tb";
import Logo from "../logo/Logo";


const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div className={"sidebar_main"}>
                <Logo/>
                <div className={"sidebar_delimiter"}/>
                <div className={"sidebar_menu"}>
                    <SidebarItem icon={<TbSmartHome size={"25px"}/>} text={"Главная"} to={"/"}/>
                    <SidebarItem icon={<TbCalendarWeek size={"23px"}/>} text={"Расписание"} to={"/schedule"}/>
                    <SidebarItem icon={<TbBook size={"23px"}/>} text={"Успеваемость"} to={"/progress"}/>
                    <SidebarItem icon={<TbBriefcase2 size={"23px"}/>} text={"Карьера"} to={"/career"}/>
                    <SidebarItem icon={<TbMessageChatbot size={"23px"}/>} text={"Обратная связь"}/>
                    <SidebarItem icon={<TbBuildingBank size={"23px"}/>} text={"Универститет"}/>
                </div>
            </div>
            <div className={"sidebar_profile"}>
                <img src={"https://avatars.dzeninfra.ru/get-zen_doc/3512851/pub_6209564f24637715d97125b4_620956933af96b75aef4d9f5/scale_1200"}/>
                <p>Иванов Иван Иванович</p>
            </div>
        </div>
    );
};

export default Sidebar;