import apiClient from "../services/api-client"
import { useEffect, useState } from "react"

const useTrendingList =  (trending: string = "movie")=>{

    const [trendingData, setTrendingData] = useState();

    const fetchTrendingResult = async ()=>{
        try {
            const res = await apiClient.get(`/trending/${trending}/day`)
    
            setTrendingData(res.data.results)
        } catch (error) {
            console.log("Unable to Fetch Trending Data", error)
        }
    }
    
    useEffect(()=>{
          fetchTrendingResult()  
    }, [])

    return { trendingData, setTrendingData }
}

export default useTrendingList;