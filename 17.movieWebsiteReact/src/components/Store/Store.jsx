import { configureStore } from "@reduxjs/toolkit";
import { addMovie, movieSlice, postdata } from "./Reducer";
import movieReducer from "./Reducer"

const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})

export default store

//Or the above statements(line 5-11) can be written as below:

// export default configureStore({
//     reducer: {
//         movie: movieSlice
//     }
// })


