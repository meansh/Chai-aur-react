import React, { useEffect, useState } from "react"
import MovieListing from "../MovieListing/MovieListing"
import MovieApi from "../api/MovieApi"
import { APIKey } from "../api/MovieApiKey"
import { useDispatch } from "react-redux"
import { addMovie } from "../Store/Reducer"


export default function Home() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor"

            const resp = await MovieApi
            .get(`?apiKey=${APIKey}&s=${searchKey}&type=movie`)
            .catch((error) => {
                console.log(error)
            })
            setTimeout(() => {
                dispatch(addMovie(resp.data.Search))
            }, 500)
        }
        fetchMovies()
    }, [search])

    return (
        <div>
            <div className="header d-flex space-between">
                <h5>Movie</h5>
                <div className="Search">
                    <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}></input>
                </div>
            </div>
            <MovieListing />
        </div>
    )
}

