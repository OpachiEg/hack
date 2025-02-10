import React from 'react';
import "./index.css";
import Info from "../components/info/Info";
import News from "../components/news/News";

const Home = () => {
    return (
        <div className={"home main-container"}>
            <p className={"a-slide-y"}>Главная</p>
            <Info/>
            <News/>
        </div>
    );
};

export default Home;