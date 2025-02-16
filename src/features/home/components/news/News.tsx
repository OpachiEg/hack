import React, {useCallback, useEffect, useRef, useState} from 'react';
import "./index.css";
import {NewsInfo} from "../../types";
import NewsItem from "./newsItem/NewsItem";
import Loading from "../../../../components/loading/Loading";
import {API} from "../../service/api";
import {useOnEndReached} from "../../../../hooks/useOnEndReached";
import NoContent from "../../../../components/NoContent";
import NewsModal, {NewsModalRefProps} from "./newsModal/NewsModal";

const News = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState<Array<NewsInfo>>();

    const modalRef = useRef<NewsModalRefProps>();

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

    const showModal = useCallback((info: NewsInfo) => {
        modalRef.current?.show(info);
    },[]);

    return (
        <div className={"home-news"}>
            <p className={"a-slide-y"}>Новости университета</p>
            {news && news?.length > 0 ?
                news?.map((v, i) => (
                    <NewsItem showModal={showModal} index={i} item={v} key={v.id} isLastItem={i === news?.length - 1}
                              onEndReached={onEndReached}/>
                ))
                :
                <>{!loading && <NoContent message={"Нет новостей"}/>}</>
            }
            {loading &&  <Loading/>}
            <NewsModal ref={modalRef}/>
        </div>
    );
};

export default News;