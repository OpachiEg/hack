import React, {useCallback, useEffect, useState} from 'react';
import CustomInput from "../../../../components/input/CustomInput";
import "./index.css";

export interface SearchResult {
    name: string,
    value: string,
    type: string
}

interface Props {
    inputPlaceholder: string,
    searchApi?: (value: string) => Promise<Array<SearchResult>>,
    setSearchResult: (value: SearchResult) => void
}

const ScheduleSearch: React.FC<Props> = ({inputPlaceholder,searchApi,setSearchResult}) => {

    const [searchItems, setSearchItems] = useState<Array<SearchResult> | null>();

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
            setSearchItems([
                {
                    name: "21П-1",
                    value: "21П-1",
                    type: "group"
                },
                {
                    name: "123",
                    value: "123",
                    type: "group"
                }
            ]);
        } else {
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
                placeholder={inputPlaceholder}
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