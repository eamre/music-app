// const TopCharts = () => <div>TopCharts</div>;

// export default TopCharts;
// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import {useGetTopChartsQuery} from "../redux/services/shazamCore"

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if(error){
    return <Error/>
  }

  return(
  <div className='flex flex-col'>
    <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'> 
        Discover Top Charts
    </h2>
    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {data?.map((song,i)=>(
        <SongCard
          key={song.key}
          song={song}
          i={i}
          data={data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          />
      ))}
    </div>
  </div>
  ) 
}

export default TopCharts;
