import React from 'react';
import {NewsInfo} from "../../../types";
import "./index.css";

interface Props {
    item: NewsInfo,
    index: number
}

const NewsItem: React.FC<Props> = ({item,index}) => {
    return (
        <div className={"a-opacity home-news_item"} style={{
            // background: `linear-gradient(90deg, rgba(${(index+1)%2!==0 ? "77,25,204" : "234,89,31"},0.2) 0%, rgba(247,246,249,0.7) 32%)`,
            border: `3px solid ${(index+1)%2!==0 ? "rgb(77,25,204)" : "rgb(234,89,31)"}`
        }}>
            <img src={item.image}/>
            <div className={"home-news_item_text"}>
                <p style={{fontWeight: "bold",fontSize: "18px"}}>{item.title}</p>
                <p>{item.text}</p>
            </div>
        </div>
    );
};

export default NewsItem;