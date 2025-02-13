import React, {ReactElement} from 'react';
import "./index.css";

export interface InfoPartItem {
    icon: ReactElement,
    text?: string,
    textElement?: ReactElement
}

interface Props {
    width: string,
    title: string,
    color?: string,
    colorRgba?: string,
    items: Array<InfoPartItem>
}

const InfoPart: React.FC<Props> = ({width, title, items, color, colorRgba}) => {
    if(items && items.length>0) {
        return (
            <div className={"a-slide-y info_part"} style={{
                width,
                boxShadow: colorRgba && `${colorRgba} 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`
            }}>
                <p style={{color: color}}>{title}</p>
                {items?.map((v) => (
                    <div className={"info_part_item"}>
                        <div>
                            {v.icon}
                        </div>
                        {!v.textElement ? <p>{v.text}</p> : <>{v.textElement}</>}
                    </div>
                ))}
            </div>
        );
    }
    return <></>
};

export default InfoPart;