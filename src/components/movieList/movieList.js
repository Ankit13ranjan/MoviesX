import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import { getDefaultNormalizer } from "@testing-library/react"
import Card from "../card/card"

const MovieList = () => {
    
    const [movieListData, setMovieListData] = useState([]);
    const {type} = useParams()

    

    useEffect(() => {
      getData();
    
      
    }, [type])

    

    const getData = async () => {


        const url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

        const response = await fetch (url);
        const resJson = await response.json();
        setMovieListData(resJson.results);
    }

    

  return (
    <div className="movie__list">
        <h2 className="list__title">{(type ? type.includes("_") ? type.replace("_"," ") : type : "popular").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieListData.map(movie => (
                    <Card movie={movie}/>
                ))
            }
        </div>


    </div>
  )
}

export default MovieList;