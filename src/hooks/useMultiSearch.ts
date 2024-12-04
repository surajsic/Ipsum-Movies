// @ts-nocheck

import { SearchResultContext } from "@/context/searchResult.context"
import apiClient from "@/services/api-client"
import { useContext, useEffect } from "react"

const useMultiSearch = (input : String)=>{

    const { setSearchData } = useContext(SearchResultContext)


    const fetchSearch = async ()=>{
        const res = await apiClient.get('/search/multi', {
            params: {
                query: input,
            },
        })

        setSearchData(res.data.results)
    }

    useEffect(()=>{
        fetchSearch();
    }, [input])
}

export default useMultiSearch;