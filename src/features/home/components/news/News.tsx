import React, {useCallback, useEffect, useState} from 'react';
import "./index.css";
import {NewsInfo} from "../../types";
import NewsItem from "./newsItem/NewsItem";
import Loading from "../../../../components/loading/Loading";
import {API} from "../../service/api";

const News = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState<Array<NewsInfo>>();

    useEffect(() => {
        load();
    }, []);

    const load = useCallback(() => {
        setLoading(true);
        API.loadNews(page, 10).then(({data}) => {
            if (news) setNews([...news, ...data]);
            else setNews(data);
            setLoading(false)
        })
    }, [page, loading, news]);

    return (
        <div className={"home-news"}>
            <p className={"a-slide-y"}>Новости университета</p>
            {!loading ? <>
                {news && news?.length>0 ? news?.map((v, i) => (
                    <NewsItem index={i} item={v} key={v.id}/>
                )) : <div className={"a-opacity"} style={{width: "100%",display: "flex",justifyContent: "center",marginTop: "20px"}}><p>Нет новостей</p></div>}
            </> : <Loading/>}
        </div>
    );
};

export default News;