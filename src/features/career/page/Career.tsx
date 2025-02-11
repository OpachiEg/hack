import React from 'react';
import Info from "../../../components/info/Info";
import {TbBell} from "react-icons/tb";
import "./index.css";
import CustomSelect from "../../../components/select/CustomSelect";
import CustomInput from "../../../components/input/CustomInput";

const Career = () => {
    return (
        <div className={"main-container"}>
            <p className={"a-slide-y"}>Карьера</p>
            <Info items={[
                {
                    color: "#E25822",
                    colorRgba: "rgba(226,88,34,0.1)",
                    width: "50%",
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
            <div className={"career_content"}>
                <h4>Актуальные вакансии</h4>
                <div className={"career_filters"}>
                    <CustomInput placeholder={"Компании"}/>
                </div>
            </div>
        </div>
    );
};

export default Career;