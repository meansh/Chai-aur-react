import { configureStore } from '@reduxjs/toolkit'
import { cartReducer as defaultCartReducer } from "./reducers/cartReducer"

export default configureStore({
    reducer: {
      defaultCartReducer
    }
  })
