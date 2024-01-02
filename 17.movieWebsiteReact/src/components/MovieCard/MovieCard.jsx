import React from "react"
import "./MovieCard.scss"
import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    return (
        <div className="col s6 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={movie.Poster} alt={movie.Title} />
               </div>
               <div className="card-content">
                <span className="card-title">{movie.Title}</span>
                <p>Year : {movie.Year}</p>
               </div>
               <div className="card-action">
                <Link to={`movie/${movie.imdbid}`}>Read More</Link>
               </div>
            </div>
        </div>
    )
}