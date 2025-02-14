import React, {useEffect, useState} from 'react';
import "./index.css";
import ScheduleSearch from "../scheduleSearch/ScheduleSearch";
import {TbArrowBigLeft, TbArrowBigRight} from "react-icons/tb";
import {ScheduleItem, ScheduleWeekDay, SearchResult} from "../../types";

const colors = [
    "rgba(0,127,255,0.1)",
    "rgba(234,89,31,0.1)",
    "rgba(159,119,242,0.1)",
    "rgba(127,255,0,0.1)",
    "rgba(239,1,7,0.1)",
    "rgba(77,25,204,0.1)"
];

const ScheduleTable = () => {

    const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
    const [scheduleWeek, setScheduleWeek] = useState<Map<ScheduleWeekDay, Array<ScheduleItem>>>();

    useEffect(() => {
        const map = new Map<ScheduleWeekDay, Array<ScheduleItem>>();
        for (let i = 0; i < 7; i++) {
            map.set({
                date: new Date(),
                dayOfWeek: "Понедельник" + i
            }, [
                {
                    id: 1,
                    groupName: "21П-1",
                    semester: "1",
                    startAt: "10:00",
                    endAt: "11:30",
                    discipline: "Информатикas dasdasdasdа",
                    teacher: "Иванов И.И.",
                    audience: "203",
                    type: "",
                    num: 1
                },
                {
                    id: 2,
                    groupName: "21П-1",
                    semester: "1",
                    startAt: "10:00",
                    endAt: "11:30",
                    discipline: "Информатика",
                    teacher: "Иванов И.И.",
                    audience: "203",
                    type: "",
                    num: 2
                }
            ])
        }
        setScheduleWeek(map)
    }, []);

    return (
        <div className={"a-opacity schedule-table"}>
            <ScheduleSearch setSearchResult={setSearchResult}/>
            <div className={"search-table_content"}>
                <div className={"search-table_header"}>
                    <div className={"search-table_header_date"}>
                        <p>Март</p>
                        <p>33 неделя, 2025</p>
                    </div>
                    {searchResult && <p>{searchResult?.name}</p>}
                    <div className={"search-table_header_pag"}>
                        <div className={"search-table_header_pag_btn"} style={{marginRight: "10px"}}>
                            <TbArrowBigLeft size={"20px"}/>
                        </div>
                        <div className={"search-table_header_pag_btn"}>
                            <TbArrowBigRight size={"20px"}/>
                        </div>
                    </div>
                </div>
                {scheduleWeek && <div className={"search-table_main"}
                                      style={{gridTemplateColumns: `repeat(${Array.from(scheduleWeek.keys()).length},1fr)`}}>
                    {Array.from(scheduleWeek.keys()).map((v, i) => (
                        <div className={"search-table_column"}
                             style={{borderRight: i === Array.from(scheduleWeek.keys()).length - 1 ? "" : "1px solid rgba(0,0,0,0.1"}}>
                            <div className={"search-table_column_header"}>
                                <p>{v.date.toLocaleString('ru-RU', {weekday: 'short'}).toUpperCase()}</p>
                                <p>{v.date.toLocaleString('ru-RU', {day: 'numeric'})}</p>
                            </div>
                            <div className={"a-slide-x search-table_column_items"}>
                                {scheduleWeek.get(v)?.map((v1,i1) => (
                                    <div className={"search-table_column_item"} style={{background: colors[i1]}}>
                                        <p>{v1.discipline}</p>
                                        <p className={"search-table_column_item_d"}>{v1.startAt} - {v1.endAt}</p>
                                        <p className={"search-table_column_item_d"}>{v1.teacher}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
};

export default ScheduleTable;