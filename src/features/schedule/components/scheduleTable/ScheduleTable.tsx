import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import "./index.css";
import ScheduleSearch from "../scheduleSearch/ScheduleSearch";
import {TbArrowBigLeft, TbArrowBigRight} from "react-icons/tb";
import {ScheduleItem, ScheduleResult, SearchResult} from "../../types";
import {API} from "../../service/api";
import {DateUtils} from "../../../../utils/DateUtils";
import NoContent from "../../../../components/NoContent";
import {AuthContext} from "../../../../provider/AuthProvider";

const colors = [
    "rgba(0,127,255,0.1)",
    "rgba(234,89,31,0.1)",
    "rgba(159,119,242,0.1)",
    "rgba(127,255,0,0.1)",
    "rgba(239,1,7,0.1)",
    "rgba(77,25,204,0.1)"
];

const ScheduleTable = () => {

    const {currentUser} = useContext(AuthContext);

    const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
    const [scheduleResult, setScheduleResult] = useState<ScheduleResult>();
    const [currentWeek, setCurrentWeek] = useState<{ startAt: Date, endAt: Date }>();

    const schedule: Array<{ date: Date, lessons: Array<ScheduleItem> }> = useMemo(() => {
        return scheduleResult ? scheduleResult.schedule.map((v) => {
            return {...v, date: new Date(v.date)}
        }) : [];
    }, [scheduleResult]);

    useEffect(() => {
        const startAt = new Date();
        startAt.setDate(startAt.getDate() - startAt.getDay() + 1);

        const endAt = new Date(startAt);
        endAt.setDate(startAt.getDate() + 6);

        setCurrentWeek({startAt, endAt});
    }, []);

    useEffect(() => {
        if(currentUser) {
            setSearchResult({
                name: currentUser.group_name + " (Группа)",
                value: currentUser.group_name,
                type: "group"
            })
        }
    },[currentUser]);

    useEffect(() => {
        if (searchResult && currentWeek) {
            API.getSchedule(
                currentWeek.startAt.toISOString().split("T")[0],
                currentWeek.endAt.toISOString().split("T")[0],
                searchResult
            ).then(({data}) => {
                setScheduleResult(data);
            });
        }
    }, [searchResult, currentWeek]);

    const changeWeek = useCallback((next: boolean) => {
        setCurrentWeek((prev) => {
            if (prev) {
                const prevStartAt = new Date(prev.startAt);
                const prevEndAt = new Date(prev.endAt);

                prevStartAt.setDate(prevStartAt.getDate() + (7 * (next ? 1 : -1)));
                prevEndAt.setDate(prevEndAt.getDate() + (7 * (next ? 1 : -1)));

                return {startAt: prevStartAt, endAt: prevEndAt}
            }
            return undefined;
        })
    }, [currentWeek]);

    return (
        <div className={"a-opacity schedule-table"}>
            <ScheduleSearch setSearchResult={setSearchResult}/>
            <div className={"search-table_content"}>
                {currentWeek && <div className={"search-table_header"}>
                    <div className={"search-table_header_date"}>
                        <p>{currentWeek?.startAt.toLocaleString('ru-RU', {month: 'long'})}</p>
                        <p>{DateUtils.getWeekNumber(currentWeek?.startAt)} неделя, {currentWeek?.startAt.toLocaleString('ru-RU', {year: 'numeric'})}</p>
                    </div>
                    {searchResult && <p>{searchResult?.name}</p>}
                    <div className={"search-table_header_pag"}>
                        <button onClick={() => changeWeek(false)} className={"search-table_header_pag_btn"}
                                style={{marginRight: "10px"}}>
                            <TbArrowBigLeft size={"18px"}/>
                        </button>
                        <button onClick={() => changeWeek(true)} className={"search-table_header_pag_btn"}>
                            <TbArrowBigRight size={"18px"}/>
                        </button>
                    </div>
                </div>}
                {schedule?.length > 0 ? <div className={"search-table_main"}
                                              style={{gridTemplateColumns: `repeat(${schedule.length},1fr)`}}>
                    {schedule.map((v, i) => (
                        <div className={"search-table_column"}
                             style={{
                                 borderRight: i === schedule.length - 1 ? "" : "1px solid rgba(0,0,0,0.1"
                             }}>
                            <div className={"search-table_column_header"} style={{
                                color: new Date().setHours(0,0,0,0) === v.date.setHours(0,0,0,0) ? "var(--primary)" : ""
                            }}>
                                <p>{v.date.toLocaleString('ru-RU', {weekday: 'short'}).toUpperCase()}</p>
                                <p>{v.date.toLocaleString('ru-RU', {day: 'numeric'})}</p>
                            </div>
                            <div className={"a-slide-x search-table_column_items"}>
                                {v.lessons.map((v1, i1) => {
                                    let t = v1.teacher;
                                    if(searchResult?.type === "teacher") {
                                        t = v1.group_name;
                                    } else if (searchResult?.type == "room") {
                                        t = `${v1.group_name} (${v1.teacher})`
                                    }

                                    return (
                                        <div className={"search-table_column_item"} style={{background: colors[v1.lesson_number-1]}}>
                                            <p>{v1.lesson_number + "." +v1.discipline}</p>
                                            <p className={"search-table_column_item_d"}>{v1.lesson_time}</p>
                                            <p className={"search-table_column_item_d"}>{t}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div> : <NoContent message={"Данных нет"}/>}
            </div>
        </div>
    );
};

export default ScheduleTable;