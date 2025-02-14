import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomInput from "../../../../components/input/CustomInput";
import "./index.css";
import {SearchResult} from "../../types";
import {API} from "../../service/api";

interface Props {
    setSearchResult: (value: SearchResult) => void
}

const ScheduleSearch: React.FC<Props> = ({setSearchResult}) => {

    const [searchItems, setSearchItems] = useState<Array<SearchResult> | null>();

    const searchTimeout = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        window.onclick = () => {
            setSearchItems(null);
        };

        return () => {
            window.onclick = null;
        }
    }, []);

    const onSearch = useCallback((value: string) => {
        if (value?.length > 0) {
            clearTimeout(searchTimeout.current);
            searchTimeout.current = setTimeout(() => {
                API.search(value)
                    .then(({data}) => setSearchItems(
                        data.map(v => {
                            let name = null;
                            switch (v.type) {
                                case "group":
                                    name = "Группа";
                                    break;
                                case "room":
                                    name = "Аудитория";
                                    break;
                                case "teacher":
                                    name = "Преподаватель";
                                    break;
                            }

                            return {...v,name: `${v.name} (${name})`}
                        })
                    ));
            },250);
        } else {
            clearTimeout(searchTimeout.current);
            setSearchItems(null);
        }
    }, []);

    return (
        <div className={"a-slide-y schedule-table_search"}>
            <CustomInput
                onChange={onSearch}
                style={{
                    width: "100%"
                }}
                placeholder={"Введите группу, ФИО преподавателя или номер аудитории"}
            />
            {searchItems && searchItems?.length>0 && <div onClick={(e) => e.stopPropagation()} className={"schedule-table_search_result"}>
                {searchItems?.map((v) => (
                    <div className={"schedule-table_search_result_item"} onClick={() => {
                        setSearchItems(null);
                        setSearchResult(v)
                    }}>
                        <p>{v.name}</p>
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default ScheduleSearch;