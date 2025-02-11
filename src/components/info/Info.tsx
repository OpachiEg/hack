import React from 'react';
import "./index.css";
import InfoPart, {InfoPartItem} from "./infoPart/InfoPart";

interface InfoPartProps {
    color?: string,
    colorRgba?: string,
    width: string,
    title: string,
    items: Array<InfoPartItem>
}

interface Props {
    items: Array<InfoPartProps>,
    width?: string
}

const Info: React.FC<Props> = ({width,items}) => {
    return (
        <div className={"page-info"} style={{width: width ?? ""}}>
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