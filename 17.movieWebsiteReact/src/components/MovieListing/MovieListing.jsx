import React from "react"
import { useSelector } from "react-redux"
import MovieCard from "../MovieCard/MovieCard"

export default function MovieListing() {
    const { movies } = useSelector((state) => state.movies)
    // const { movies } destructuring
                    //OR//
    //const movies = state.movies;                
    return (
        <div>
            <div className="row d-flex">
                {movies && 
                movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
            </div>
        </div>
    )
}

 