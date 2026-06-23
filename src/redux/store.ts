import { configureStore } from "@reduxjs/toolkit"
import { modalReducer } from "./reducer.ts"

export const store = configureStore({ reducer: modalReducer })
