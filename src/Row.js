import React, { useEffect, useState } from 'react'
import axios from './axios';
import './styles/row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// this is basic url which should be put before poster_path while mapping images
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {

  const [movies, setmovies] = useState([])
  const [trailerUrl,setTrailerUrl] = useState("")
 
  // Use to fetch the details or information or image from above movie set basically when a row loads this specific snippet runs
  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      // https://api.themoviedb.org/3 " We get this URL above " 

      // list of movies is called and can be seen in console log
      setmovies(request.data.results);
      return request;

    }
    fetchData();

    // if [blank] it means it runs once when the row loads and does not run again

    // any variable which belongs outside of useEffect function must be mentioned in these brackets here fetchUrl is outsider []

  }, [fetchUrl]);

  console.log(movies);


  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      // https://developers.google.com/youtube/player_parameters,
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie?.name || "")
      .then(url => {
         //https://www.youtube.com/watch?v=XtMThy8QKqU&banana=5
         const urlParams = new URLSearchParams(new URL(url).search);
         setTrailerUrl(urlParams.get("v"));
      }).catch(error => console.log(error))
    }
  }

  return (
    <div className='row'>

      <h2>{title}</h2>
        
      {/* different poster of different movies is shown here */}
      <div className='row_poster'>

        {/* using map function to bring particular image form an array */}
        {movies.map(movie => (
          // poster_path is the url of particular image
          <img key={movie.id} 
          onClick={() => handleClick(movie)}
          className={`image_row ${isLargeRow && "row_largeimg"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/> 
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;
