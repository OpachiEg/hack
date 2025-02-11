import React from 'react';
import "./index.css";
import InfoPart, {InfoPartItem} from "./infoPart/InfoPart";
import {TbBell, TbBriefcase2, TbCircleNumber4} from "react-icons/tb";
import { TbCircleNumber5 } from "react-icons/tb";

interface InfoPartProps {
    color?: string,
    colorRgba?: string,
    width: string,
    title: string,
    items: Array<InfoPartItem>
}

interface Props {
    items: Array<InfoPartProps>
}

const Info: React.FC<Props> = ({items}) => {
    return (
        <div className={"page-info"}>
            {items?.map(v => (
                <InfoPart
                    color={v.color}
                    colorRgba={v.colorRgba}
                    width={v.width}
                    title={v.title}
                    items={v.items}/>
            ))}
        </div>
    );
};

export default Info;