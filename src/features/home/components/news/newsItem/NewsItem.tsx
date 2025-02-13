import React from 'react';
import {NewsInfo} from "../../../types";
import "./index.css";
import {InView} from "react-intersection-observer";

interface Props {
    item: NewsInfo,
    index: number,
    isLastItem: boolean
    onEndReached: () => void
}

const NewsItem: React.FC<Props> = ({item,index,isLastItem,onEndReached }) => {
    return (
        <InView threshold={0.5} as={"div"} onChange={inView => {
            if (inView && isLastItem) {
                onEndReached();
            }
        }} className={"a-opacity home-news_item"} style={{
            border: `3px solid ${(index+1)%2!==0 ? "rgb(77,25,204)" : "rgb(234,89,31)"}`
        }}>
            <div className={"home-news_item_img"}>
                <img src={item.image_url}/>
            </div>
            <div className={"home-news_item_text"}>
                <p style={{fontWeight: "bold",fontSize: "18px"}}>{item.title} <span style={{fontSize: "14px",fontFamily: "MF-Regular",opacity: 0.6}}>{new Date(item.created_at).toLocaleString('ru-RU', {day: 'numeric',month: "numeric",year: "numeric"})}</span></p>
                <p>{item.content}</p>
            </div>
        </InView>
    );
};

export default NewsItem;