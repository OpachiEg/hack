import React, {CSSProperties, useMemo} from 'react';
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
    style?: CSSProperties
}

const Info: React.FC<Props> = ({style,items}) => {

    const itemsNotEmpty = useMemo(() => {
        let empty = true;
        for(let intoPart of items) {
            if(intoPart.items && intoPart.items.length>0) {
                empty = false;
                break;
            }
        }
        return empty;
    },[items]);

    if(!itemsNotEmpty) {
        return (
            <div className={"page-info"} style={style}>
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
    }

    return <></>
};

export default Info;