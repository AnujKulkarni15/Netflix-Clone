import axios from './axios';
import React, { useEffect, useState } from 'react'
import Request from './Request';
import './styles/banner.css';

function Banner() {

  const [movie , setmovie] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(Request.fetchTrending);

      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie)

  function truncate(str , n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }

  return (

    <header className='banner'
      style={{backgroundSize:"cover" , backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` , backgroundPosition: "center center"}}
    >
      <div className='banner_content'>

        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className='button_div'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <p className='banner_description'>
          {truncate(movie?.overview, 150)}
        </p>

      </div>

      <div className='banner_bottom'></div>

    </header>

  )
}

export default Banner
