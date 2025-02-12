import React from 'react';
import "./index.css";
import ScheduleTable from "../components/scheduleTable/ScheduleTable";

const Schedule = () => {
    return (
        <div className={"main-container"}>
            <p className={"a-slide-y"}>Расписание</p>
            <ScheduleTable inputPlaceholder={"Введите группу"}/>
        </div>
    );
};

export default Schedule;