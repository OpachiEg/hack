import React from 'react';
import {VacanciesInfo} from '../../../../home/types';
import "./index.css";
import {TbBriefcase2, TbCalendarWeek, TbCurrencyDollar} from "react-icons/tb";


interface Props {
    item: VacanciesInfo,
}

const VacanciesItem: React.FC<Props> = ({item}) => {
    return (
        <div className="a-opacity vacancy-item">
            <div className={"vacancy-item_header"}>
                <img src={item.image} alt={item.title}/>
                <div className={"vacancy-item_header_text"}>
                    <p>{item.profession}</p>
                    <p>{item.company}</p>
                </div>
            </div>
            <div className={"vacancy-item_details"}>
                <div className={"vacancy-item_details_item"}>
                    <TbCurrencyDollar size={"18px"}/>
                    <p>{item.salary}</p>
                </div>
                <div className={"vacancy-item_details_item"}>
                    <TbBriefcase2 size={"18px"}/>
                    <p>{item.requiredExperience}</p>
                </div>
                <div className={"vacancy-item_details_item"}>
                    <TbCalendarWeek size={"18px"}/>
                    <p>{item.employmentType}</p>
                </div>
            </div>
        </div>
    );
};

export default VacanciesItem;