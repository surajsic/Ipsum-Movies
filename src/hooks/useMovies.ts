import apiClient from "../services/api-client"
import { useEffect, useState } from "react"

export interface MovieResult{
    adult: boolean,
    id: number,
    original_language: string,
    original_title: string,
    title: string,
    backdrop_path: string,
    poster_path: string,
    overview: string,
    name?: string
}

const useMovieList = (genres?: number | null )=>{

    const [movieList, setMovieList] = useState<MovieResult[]>()

    const fetchMovieList = async ()=>{
        try {
        const response = await apiClient.get('/discover/movie', {
            params: {
                with_genres: genres,
                
            },
        })
        setMovieList(response.data.results)
       // console.log(response.data.results)
        } catch (error) {
            console.log("Error Fetching movies in real time", error)
        }
    }

    useEffect(()=>{
        fetchMovieList()
    }, [genres])

    return { movieList }
}

export default useMovieList;