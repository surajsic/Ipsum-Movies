import { useParams } from "react-router"

const TvShowPlayer = () => {

    const { tvplayerId } = useParams();

    const tvShowUrl = `https://vidsrc.xyz/embed/tv/${tvplayerId}`
  return (
    <div>
        <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={tvShowUrl}
        >

        </iframe>
    </div>
  )
}

export default TvShowPlayer
