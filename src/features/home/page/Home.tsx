import React from 'react';
import Info from "../../../components/info/Info";
import News from "../components/news/News";
import {TbBell, TbBriefcase2, TbCircleNumber4, TbCircleNumber5} from "react-icons/tb";

const Home = () => {
    return (
        <div className={"home main-container"}>
            <p className={"a-slide-y"}>Главная</p>
            <Info items={[
                {
                    color: "#00CED1",
                    colorRgba: "rgb(0,206,209,0.1)",
                    width: "29%",
                    title: "Напоминания",
                    items: [
                        {
                            icon: <TbBell width={"18px"} size={"18px"}/>,
                            text: "Сегодня пройдет Хакатон 'Войти в Айти' "
                        },
                        {
                            icon: <TbBell size={"18px"}/>,
                            text: "23.12.2024 Защита Проекта"
                        }
                    ]
                },
                {
                    color: "#EF0107",
                    colorRgba: "rgb(239,1,7,0.1)",
                    width: "29%",
                    title: "Оценки недели",
                    items: [
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
                    ]
                },
                {
                    color: "#03C03C",
                    colorRgba: "rgb(3,192,60,0.1)",
                    width: "29%",
                    title: "Карьерные предложения",
                    items: [
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
                    ]
                }
            ]}/>
            <News/>
        </div>
    );
};

export default Home;