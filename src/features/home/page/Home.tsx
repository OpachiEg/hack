import React, {useEffect, useState} from 'react';
import Info from "../../../components/info/Info";
import News from "../components/news/News";
import {TbBell, TbBriefcase2, TbCircleNumber4, TbCircleNumber5} from "react-icons/tb";
import {InfoPartItem} from "../../../components/info/infoPart/InfoPart";
import {API} from "../service/api";

const Home = () => {

    const [vacancies,setVacancies] = useState<Array<InfoPartItem>>([]);
    const [reminders,setReminders] = useState<Array<InfoPartItem>>([]);

    useEffect(() => {
        API.loadVacancies(3).then(({data}) => {
            setVacancies(data.map(v => ({icon: <TbBriefcase2 size={"18px"}/>,text: `${v.company_name} (${v.vacancy_name})`})));
        });
        API.loadReminders(3).then(({data}) => {
            setReminders(data.map(v => (
                {
                    icon: <TbBriefcase2 size={"18px"}/>,
                    text: `${new Date(v.event_datetime).toLocaleString('ru-RU', {day: 'numeric',month: "short",year: "numeric"})} ${v.title}`})
            ));
        })
    },[]);

    return (
        <div className={"home main-container"}>
            <p className={"a-slide-y"}>Главная</p>
            <Info items={[
                {
                    color: "#00CED1",
                    colorRgba: "rgb(0,206,209,0.1)",
                    width: "29%",
                    title: "Напоминания",
                    items: reminders
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
                    items: vacancies
                }
            ]}/>
            <News/>
        </div>
    );
};

export default Home;