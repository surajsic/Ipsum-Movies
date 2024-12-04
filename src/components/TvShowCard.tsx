import { TvShowResult } from '@/hooks/useTvShow'
import { Card, CardContent } from './ui/card'
import { useNavigate } from 'react-router'


interface Props{
    tvShowResult: TvShowResult
}

const TvShowCard = ({ tvShowResult }: Props) => {

    const navigate = useNavigate();
  return (
<Card className="border-0" onClick={()=> {
    navigate(`/tvplayer/${tvShowResult.id}`)
}}>
        <CardContent>
            <div>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
                    alt="poster"
                    className="hover:opacity-80 transition-all cursor-pointer"
                />
                <h1 className="mt-3">
                    {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
                </h1>
            </div>
        </CardContent>
    </Card>
  )
}

export default TvShowCard
