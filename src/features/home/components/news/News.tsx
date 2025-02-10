import React, {useState} from 'react';
import "./index.css";
import {NewsInfo} from "../../types";
import NewsItem from "./newsItem/NewsItem";

const News = () => {

    const [news,setNews] = useState<Array<NewsInfo>>([
        {
            id: 1,
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        },
        {
            id: 2,
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        },
        {
            id: 3,
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        },
        {
            id: 4,
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        },
        {
            id: 5,
            title: "День открытых дверей",
            image: "https://eventbooking.ru/file-manager/file?path=albums%2Falbum%2Fbd%2Fbd0ca3100d578f6da6f188dcd94a964d5e36fb13e054b.jpg",
            text: "ФГБОУ ВО Уфимский университет науки и технологий (Уфимский университет науки и технологий, УУНиТ; Уфимский университет[2]) — высшее учебное заведение в городе Уфа, созданное в 2022 в результате объединения (слияния) классического Башкирского государственного университета — старейшего вуза Башкортостана, основанного в 1909, и Уфимского государственного авиационного технического университета, основанного в 1932, входившего в ТОП-100 лучших вузов России до 2022 и занимавший 25-е место среди российских вузов в рейтинге лучших вузов мира в 2021"
        }
    ]);

    return (
        <div className={"home-news"}>
            <h4 className={"a-slide-y"}>Новости университета</h4>
            {news?.map((v,i) => (
                <NewsItem index={i} item={v} key={v.id}/>
            ))}
        </div>
    );
};

export default News;