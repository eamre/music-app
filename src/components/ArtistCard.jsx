import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate=useNavigate();

  return(
  <div className="flex flex-col p-4 bg-white/5 bg-opacity-80
  backdrop-blur-sm animate-slideup cursor-pointer rounded-lg" 
  onClick={()=>navigate(`/artists/${track?.artists[0].adamid}`)}>
    <img alt="" src={track?.images?.coverart} className="w-full h-52"></img>
    <p className="mt-4 font-semibold text-md truncate text-white">{track?.subtitle}</p>
  </div>
  )
};

export default ArtistCard;
