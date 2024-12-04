import apiClient from "@/services/api-client"
import { useEffect, useState } from "react"

export interface TvShowResult{
    adult: boolean,
    id: number,
    original_language: string,
    original_name: string,
    title: string,
    backdrop_path: string,
    poster_path: string,
    overview: string,
    name?: string
}


const useTvShow =  ()=>{

    const [tvShows, setTvShows] = useState<TvShowResult[]>()

    const fetchTvShow = async ()=>{
        try {
            const res = await apiClient.get('/discover/tv')
            setTvShows(res.data.results)
          //  console.log(res.data.results) 
        } catch (error) {
            console.log("Unable to Fetch Tv Shows", error)            
        }
    }

    useEffect(()=>{
        fetchTvShow()
    }, [])

    return { tvShows }
}

export default useTvShow;   