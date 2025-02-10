import React from 'react';
import "./index.css";
import InfoPart from "./infoPart/InfoPart";
import {TbBell, TbBriefcase2, TbCircleNumber4} from "react-icons/tb";
import { TbCircleNumber5 } from "react-icons/tb";

const Info = () => {
    return (
        <div className={"page-info"}>
            <InfoPart color={"#00CED1"} colorRgba={"rgb(0,206,209,0.1)"} width={"29%"} title={"Напоминания"} items={[
                {
                    icon: <TbBell width={"18px"} size={"18px"}/>,
                    text: "Сегодня пройдет Хакатон 'Войти в Айти' "
                },
                {
                    icon: <TbBell size={"18px"}/>,
                    text: "23.12.2024 Защита Проекта"
                }
            ]}/>
            <InfoPart color={"#EF0107"} colorRgba={"rgb(239,1,7,0.1)"} width={"29%"} title={"Оценки недели"} items={[
                {
                    icon: <TbCircleNumber5 size={"18px"}/>,
                    text: "Системный анализ (Диф. зачет)"
                },
                {
                    icon: <TbCircleNumber5 size={"18px"}/>,
                    text: "Программная инженерия (Диф. зачет)"
                },
                {
                    icon: <TbCircleNumber4 size={"18px"}/>,
                    text: "История (Диф. зачет)"
                }
            ]}/>
            <InfoPart color={"#03C03C"} colorRgba={"rgb(3,192,60,0.1)"} width={"29%"} title={"Карьерные предложения"} items={[
                {
                    icon: <TbBriefcase2 size={"18px"}/>,
                    text: "ГазПром (Ведущий проектов)"
                },
                {
                    icon: <TbBriefcase2 size={"18px"}/>,
                    text: "ДРТ (Системный аналитик)"
                },
                {
                    icon: <TbBriefcase2 size={"18px"}/>,
                    text: "РосНефть (Программист)"
                }
            ]}/>
        </div>
    );
};

export default Info;