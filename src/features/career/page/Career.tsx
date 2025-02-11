import React from 'react';
import Info from "../../../components/info/Info";
import {TbBell} from "react-icons/tb";
import "./index.css";
import CustomSelect from "../../../components/select/CustomSelect";
import CustomInput from "../../../components/input/CustomInput";
import Vacancies from '../components/vacancies/Vacancies';
import UsefulLink from "../../../components/usefulLink/UsefulLink";

const Career = () => {
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
                        items: [
                            {
                                icon: <TbBell width={"18px"} size={"18px"}/>,
                                text: "Сегодня пройдет Хакатон",
                                textElement: <p>
                                    {"Как правильно составить резюме: "}
                                    <a href={"https://str.uust.ru/page/241/?option=com_docman&task=cat_view&gid=25&limit=20&limitstart=20&order=date&dir=DESC&Itemid=99999999"}>{"https://str.uust.ru/page/241/?option=com_docman&task=cat_view&gid=25&limit=20&limitstart=20&order=date&dir=DESC&Itemid=99999999"}</a>
                                </p>
                            }
                        ]
                    }
                ]}/>
                <div className={"career_useful-links"}>
                    <UsefulLink bgColor={"rgba(0,127,255,0.05)"} title={"Трудовой кодекс"} color={"#007FFF"} link={""}/>
                    <UsefulLink bgColor={"rgba(127,255,0,0.05)"} title={"Постановление РФ №501"} color={"#7FFF00"} link={""}/>
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