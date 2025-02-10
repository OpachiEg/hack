import React from 'react';
import {NewsInfo} from "../../../types";
import "./index.css";

interface Props {
    item: NewsInfo,
    index: number
}

const NewsItem: React.FC<Props> = ({item,index}) => {
    return (
        <div className={"a-slide-x home-news_item"} style={{background: (index+1)%2!==0 ? "rgba(77,25,204,0.7)" : "rgba(234,89,31,0.7)"}}>
            <img src={item.image}/>
            <div className={"home-news_item_text"}>
                <p style={{fontWeight: "bold",fontSize: "18px"}}>{item.title}</p>
                <p>{item.text}</p>
            </div>
        </div>
    );
};

export default NewsItem;