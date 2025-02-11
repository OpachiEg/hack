import React from 'react';
import "./index.css"

interface Props {
    title: string,
    color: string,
    bgColor: string,
    link: string
}

const UsefulLink: React.FC<Props> = ({title,bgColor,color,link}) => {
    return (
        <a href={link} className={"a-slide-y useful-link"} style={{background: bgColor}}>
            <div style={{background: color}}/>
            <p>{title}</p>
        </a>
    );
};

export default UsefulLink;