import React, {useCallback, useEffect, useState} from 'react';
import "./index.css";
import {NewsInfo} from "../../types";
import NewsItem from "./newsItem/NewsItem";
import Loading from "../../../../components/loading/Loading";
import {API} from "../../service/api";
import {useOnEndReached} from "../../../../hooks/useOnEndReached";
import NoContent from "../../../../components/NoContent";

const News = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState<Array<NewsInfo>>();

    useEffect(() => {
        load();
    }, []);

    const load = useCallback(async () => {
        setLoading(true);

        const {data} = await API.loadNews(page, 5);

        setPage(page + 1);
        if (news) setNews([...news, ...data]);
        else setNews(data);
        setLoading(false);

        return data;
    }, [page, loading, news]);

    const onEndReached = useOnEndReached(loading, news, load);

    return (
        <div className={"home-news"}>
            <p className={"a-slide-y"}>Новости университета</p>
            {news && news?.length > 0 ?
                news?.map((v, i) => (
                    <NewsItem index={i} item={v} key={v.id} isLastItem={i === news?.length - 1}
                              onEndReached={onEndReached}/>
                ))
                :
                <NoContent message={"Нет новостей"}/>
            }
            {loading &&  <Loading/>}
        </div>
    );
};

export default News;