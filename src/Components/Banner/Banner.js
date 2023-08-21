import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
// 872585: key of trailer
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(
    ()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       console.log(response.data.results[3])
       setMovie(response.data.results[3])
     })
   },[]
   )
  
  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title' >{movie?movie.title:""}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>""The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.""</h1>
      </div>
     <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
