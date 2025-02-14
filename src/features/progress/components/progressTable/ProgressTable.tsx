import React, {ReactElement, useEffect, useState} from 'react';
import List, {ListItem} from "../../../../components/list/List";
import {MathUtils} from "../../../../utils/MathUtils";
import {ColorUtils} from "../../../../utils/ColorUtils";
import {API} from "../../service/api";
import {ProgressDisciplineInfo, ProgressGroupInfo, ProgressInfo} from "../../types";
import { TbCheck } from "react-icons/tb";
import { TbX } from "react-icons/tb";
import NoContent from "../../../../components/NoContent";


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

const ProgressTable: React.FC<Props> = ({semester}) => {

    const [data,setData] = useState<Array<ListItem>>(tableHeaders);

    useEffect(() => {
        API.loadProgress(1,semester).then(({data: response}) => {
            setData((prev) => {
                let newData = [...prev];

                const fields = ["cycle", "discipline.name", "lectures_hours", "lab_hours",
                    "practice_hours", "self_study_hours", "credit_units", "exam", "credit",
                    "graphic_work", "diff_credit", "course_work", "course_project", "essay", "report"];

                const marks = ["credit_units","exam","credit","diff_credit","graphic_work","course_work","course_project","essay","report"];

                for (let resp of response) {
                    for (let field of fields) {
                        if (field.includes(".")) {
                            const parts = field.split(".");

                            const obj: ProgressGroupInfo | ProgressDisciplineInfo = ((resp[parts[0] as keyof ProgressInfo]) as ProgressGroupInfo | ProgressDisciplineInfo);

                            newData.push({
                                type: "text",
                                value: obj[parts[1] as keyof typeof obj]
                            })
                        } else {
                            const respValue = resp[field as keyof ProgressInfo];

                            let value: {value?: string,valueElement?: ReactElement} = {value: respValue.toString()};
                            if((typeof respValue) === "boolean") {
                                value = {
                                    valueElement: (respValue as boolean) ? <TbCheck color={"var(--green)"} size={"18px"}/> : <TbX color={"var(--red)"} size={"18px"}/>
                                }
                            }

                            newData.push({
                                type: "text",
                                ...value,
                                color: marks.includes(field) ? ColorUtils.getColorByMark(resp[field as keyof ProgressInfo] as number) : undefined
                            })
                        }
                    }
                }

                return newData;
            });
        });
    },[]);

    if(data && data.length>tableHeaders.length) {
        return (
            <List columns={15} items={data}/>
        );
    }
    
    return <NoContent message={"Данных нет"}/>
};

export default ProgressTable;