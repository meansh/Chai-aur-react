import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: []
}

export const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
        },
        postdata: (state, action) => {
             // This reducer doesn't currently do anything
            // You can add logic to handle the "postdata" action if needed
        }
    }
})

export const { addMovie, postdata } = movieSlice.actions

export default movieSlice.reducer

