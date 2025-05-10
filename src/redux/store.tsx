import { configureStore } from "@reduxjs/toolkit"
import { modalReducer } from "./reducer"

export const store = configureStore({ reducer: modalReducer })
