import useTvShow from "@/hooks/useTvShow"
import TvShowCard from "./TvShowCard"

const TvShowList = () => {

  const { tvShows } = useTvShow()
  console.log(tvShows)

  return (
    <div className="p-3 mb-4">

      <h1 className="text-4xl font-semibold p-5 py-8" > Tv Shows </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
        {tvShows?.map((tvShow) => (
          <div key={tvShow.id}>
            <TvShowCard tvShowResult={tvShow} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TvShowList
