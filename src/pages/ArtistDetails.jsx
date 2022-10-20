import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails,error }=useGetArtistDetailsQuery(id);

  console.log(id);

  if(isFetchingArtistDetails){
    return <Loader title="Loading artist details..."/>
  }

  if(error){<Error/>}

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={id} artistData={artistData}/>
      <RelatedSongs
        data={Object.values(artistData?.songs)} 
        artistId={id}
        isPlaying={isPlaying} 
        activeSong={activeSong}
        />
    </div>
);
};


export default ArtistDetails;
