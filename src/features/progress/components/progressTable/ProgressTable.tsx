import React, {useEffect, useState} from 'react';
import List, {ListItem} from "../../../../components/list/List";
import {MathUtils} from "../../../../utils/MathUtils";
import {ColorUtils} from "../../../../utils/ColorUtils";

const tableHeaders: Array<ListItem> = [
    {
        type: "header",
        value: "Цикл",
    },
    {
        type: "header",
        value: "Дисциплина",
    },
    {
        type: "header",
        value: "Лек",
    },
    {
        type: "header",
        value: "Лаб",
    },
    {
        type: "header",
        value: "Прак",
    },
    {
        type: "header",
        value: "СРС",
    },
    {
        type: "header",
        value: "З.Е.",
    },
    {
        type: "header",
        value: "Экз",
    },
    {
        type: "header",
        value: "Зач",
    },
    {
        type: "header",
        value: "РГР",
    },
    {
        type: "header",
        value: "Д.Зач.",
    },
    {
        type: "header",
        value: "КР",
    },
    {
        type: "header",
        value: "КП",
    },
    {
        type: "header",
        value: "Эссе",
    },
    {
        type: "header",
        value: "Реф",
    }
];

interface Props {
    semester: number
}

const ProgressTable: React.FC<Props> = () => {

    const [data,setData] = useState<Array<ListItem>>(tableHeaders);

    useEffect(() => {
        let arr: Array<ListItem> = [
            {
                type: "text",
                value: "М1.0.2.0",
            },
            {
                type: "text",
                value: "История",
            },
            {
                type: "text",
                value: "20",
            },
            {
                type: "text",
                value: "0",
            },
            {
                type: "text",
                value: "20",
            },
            {
                type: "text",
                value: "64",
            },
            {
                type: "text",
                value: "5",
                color: ColorUtils.getColorByMark(5)
            },
            {
                type: "text",
                value: "4",
                color: ColorUtils.getColorByMark(4)
            },
            {
                type: "text",
                value: "3",
                color: ColorUtils.getColorByMark(3)
            },
            {
                type: "text",
                value: null,
            },
            {
                type: "text",
                value: null,
            },
            {
                type: "text",
                value: "2",
                color: ColorUtils.getColorByMark(2)
            },
            {
                type: "text",
                value: null,
            },
            {
                type: "text",
                value: "2",
                color: ColorUtils.getColorByMark(2)
            },
            {
                type: "text",
                value: null,
            }
        ];
        let newData: Array<ListItem> = [];
        for(let i=0;i<10;i++) {
            newData = [...newData,...arr];
        }

        setData((d) => [
            ...data,
            ...newData
        ])
    },[]);

    return (
        <List columns={15} items={data}/>
    );
};

export default ProgressTable;