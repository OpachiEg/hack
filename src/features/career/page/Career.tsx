import React, {useEffect, useState} from 'react';
import Info from "../../../components/info/Info";
import {TbBell} from "react-icons/tb";
import "./index.css";
import CustomInput from "../../../components/input/CustomInput";
import Vacancies from '../components/vacancies/Vacancies';
import UsefulLink from "../../../components/usefulLink/UsefulLink";
import {InfoPartItem} from "../../../components/info/infoPart/InfoPart";
import {API} from "../service/api";

const Career = () => {

    const [links,setLinks] = useState<Array<InfoPartItem>>([]);

    useEffect(() => {
        API.loadLinks("Помощь с резюме",3).then(({data}) => {
            setLinks(data.map(v => (
                {
                    icon: <TbBell width={"18px"} size={"18px"}/>,
                    textElement: <a href={v.url}>
                        {v.title}
                    </a>
                }
            )));
        })
    },[]);

    return (
        <div className={"main-container"}>
            <p className={"a-slide-y"}>Карьера</p>
            <div className={"career-header"}>
                <Info width={"50%"} items={[
                    {
                        color: "#E25822",
                        colorRgba: "rgba(226,88,34,0.1)",
                        width: "100%",
                        title: "Составление резюме",
                        items: links
                    }
                ]}/>
                <div className={"career_useful-links"}>
                    <UsefulLink bgColor={"rgba(0,127,255,0.05)"} title={"Трудовой кодекс"} color={"var(--blue)"} link={""}/>
                    <UsefulLink bgColor={"rgba(127,255,0,0.05)"} title={"Постановление РФ №501"} color={"var(--light-green)"} link={""}/>
                </div>
            </div>
            <div className={"career_content"}>
                <p className={"a-slide-y"}>Актуальные вакансии</p>
                <div className={"career_filters"}>
                    <CustomInput style={{
                        width: "60%",
                        maxWidth: "400px"
                    }} placeholder={"Компании"}/>
                </div>
                <Vacancies></Vacancies>
            </div>
        </div>
    );
};

export default Career;