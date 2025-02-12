import React, {ReactElement} from 'react';
import "./index.css";


export interface ListItem {
    type: "header" | "text",
    value: string | null,
    icon?: ReactElement,
    onClick?: (id: number) => void,
    id?: number,
    color?: string
}

export interface Props {
    items: Array<ListItem> | null,
    columns: number,
    loading?: boolean
}

const List: React.FC<Props> = ({loading,items,columns }) => {

    return (
        <div className={"d-list"}>
            {!loading && <div className={"d-list__content"} style={{
                gridTemplateColumns: `repeat(${columns},1fr)`
            }}>
                {items?.map((value, index) => {
                    const style = {
                        borderRight: (index + 1) % columns === 0 ? "none" : "1px solid rgba(0,0,0,0.1)",
                        color: value.color ?? ""
                    };
                    if (value.type === "header") {
                        return <div className={"a-slide-y d-list__content__item d-list__content__header"} style={style}>
                            <div className={"d-list__content__header__name"}>
                                {value.icon}
                                <p style={{
                                    marginLeft: value.icon ? "7px" : "0px",
                                    fontFamily: "MF-Bold"
                                }}>{value.value}</p>
                            </div>
                        </div>
                    } else {
                        return <div className={"a-slide-x d-list__content__item"} style={style}>
                            <p>{value.value ?? "-"}</p>
                        </div>
                    }
                })}
            </div>}
        </div>
    );
};

export default List;