import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react';
import "./index.css";
import VacanciesItem from './vacanciesItem/VacanciesItem';
import {VacancyInfo} from "../../types";
import {API} from "../../service/api";
import {useOnEndReached} from "../../../../hooks/useOnEndReached";
import NoContent from "../../../../components/NoContent";
import Loading from "../../../../components/loading/Loading";

export interface VacanciesRef {
    search: (query: string) => void
}

const Vacancies = forwardRef((props, ref) => {

    const [vacancies, setVacancies] = useState<Array<VacancyInfo>>();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    const searchTimeout = useRef<ReturnType<typeof setTimeout>>();

    useImperativeHandle(ref, () => {
        return {
            search(query: string) {
                clearTimeout(searchTimeout.current);
                searchTimeout.current = setTimeout(() => {
                    setQuery(query);
                    setPage(1);
                    setVacancies(undefined);
                }, 250);
            }
        }
    },[]);

    useEffect(() => {
        if(!vacancies) {
            load();
        }
    }, [vacancies]);

    const load = useCallback(async () => {
        setLoading(true);

        const {data} = await API.searchVacancies(query, page, 15);

        setPage(page + 1);
        if (vacancies) setVacancies([...vacancies, ...data]);
        else setVacancies(data);
        setLoading(false);

        return data;
    }, [page, vacancies, query]);

    const onEndReached = useOnEndReached(loading, vacancies, load);

    return (
        <div className="career-vacancies">
            {vacancies && vacancies.length > 0 ?
                <div className="vacancies-container">
                    {vacancies.map((v, i) => (
                        <VacanciesItem isLastItem={i === vacancies?.length - 1} onEndReached={onEndReached} key={v.id}
                                       item={v}/>
                    ))}
                </div>
                :
                <>{!loading && <NoContent message={"Вакансий нет"}/>}</>}
            {loading && <Loading/>}
        </div>
    );
});

export default Vacancies;