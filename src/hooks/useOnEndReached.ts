import {useCallback, useEffect, useState} from "react";

export const useOnEndReached = (loading: boolean,items: Array<any> | undefined,loadData: () => Promise<Array<any>>) => {

    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if(!items) {
            setIsEnd(false);
        }
    },[items]);

    const onEndReached = useCallback(async () => {
        if (loadData && !loading && !isEnd) {
            const data = await loadData();
            if (data?.length === 0) {
                setIsEnd(true);
            }
        }
    }, [loading, isEnd, items, loadData]);

    return onEndReached;
};