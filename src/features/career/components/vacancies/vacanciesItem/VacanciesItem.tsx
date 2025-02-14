import React from 'react';
import "./index.css";
import {TbBriefcase2, TbCalendarWeek, TbCurrencyDollar} from "react-icons/tb";
import {VacancyInfo} from "../../../types";
import {InView} from "react-intersection-observer";


interface Props {
    item: VacancyInfo,
    onEndReached: () => void,
    isLastItem: boolean
}

const VacanciesItem: React.FC<Props> = ({item, onEndReached, isLastItem}) => {
    return (
        <InView threshold={0.5} as={"div"} onChange={inView => {
            if (inView && isLastItem) {
                onEndReached();
            }
        }} className="a-opacity vacancy-item">
            <div className={"vacancy-item_content"}>
                <div className={"vacancy-item_header"}>
                    <img src={item.image_url}/>
                    <div className={"vacancy-item_header_text"}>
                        <p>{item.vacancy_name}</p>
                        <a>{item.company_name}</a>
                    </div>
                </div>
                <div className={"vacancy-item_details"}>
                    <div className={"vacancy-item_details_item"}>
                        <TbCurrencyDollar size={"18px"}/>
                        <p>{item.salary}</p>
                    </div>
                    <div className={"vacancy-item_details_item"}>
                        <TbBriefcase2 size={"18px"}/>
                        <p>{item.exp}</p>
                    </div>
                    <div className={"vacancy-item_details_item"}>
                        <TbCalendarWeek size={"18px"}/>
                        <p>{item.type_of_employment}</p>
                    </div>
                </div>
                <div className={"vacancy-item_other"}>
                    <div className={"vacancy-item_other_item"}>
                        <p>Требования</p>
                        <p>{item.requirements}</p>
                    </div>
                    <div className={"vacancy-item_other_item"}>
                        <p>Обязанности</p>
                        <p>{item.responsibilities}</p>
                    </div>
                </div>
            </div>
        </InView>
    );
};

export default VacanciesItem;