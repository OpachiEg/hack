import React from 'react';
import { VacanciesInfo } from '../../../home/types';
import "./index.css";

interface Props {
    item: VacanciesInfo,
}

const VacanciesItem: React.FC<Props> = ({ item }) => {
    return (
        <div className="vacancy-item">
            <img src={item.image} alt={item.title} className="vacancy-image" />
            <div className="vacancy-details">
                <div className="vacancy-main-info">
                    <span>{item.profession}</span>
                    <span>{item.salary}</span>
                </div>
                <p className="vacancy-description">{item.requirements}</p>
                <div className="vacancy-date">24 March 2024</div>
            </div>
        </div>
    );
};

export default VacanciesItem;