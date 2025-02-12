import React, {useState} from 'react';
import "./index.css";
import ScheduleSearch, {SearchResult} from "../scheduleSearch/ScheduleSearch";
import {TbArrowBigLeft, TbArrowBigRight} from "react-icons/tb";



interface Props {
    inputPlaceholder: string,
    searchApi?: (value: string) => Promise<Array<SearchResult>>
}

const ScheduleTable: React.FC<Props> = ({inputPlaceholder, searchApi}) => {

    const [searchResult, setSearchResult] = useState<SearchResult | null>(null);


    return (
        <div className={"schedule-table"}>
            <ScheduleSearch inputPlaceholder={inputPlaceholder} setSearchResult={setSearchResult}/>
            <div className={"search-table_content"}>
                <div className={"search-table_header"}>
                    <div className={"search-table_header_date"}>
                        <p>33 неделя</p>
                        <p>2025</p>
                    </div>
                    {searchResult && <p>{searchResult?.name}</p>}
                    <div className={"search-table_header_pag"}>
                        <div className={"search-table_header_pag_btn"} style={{marginRight: "10px"}}>
                            <TbArrowBigLeft size={"20px"}/>
                        </div>
                        <div className={"search-table_header_pag_btn"}>
                            <TbArrowBigRight size={"20px"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleTable;