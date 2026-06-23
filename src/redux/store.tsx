import { configureStore } from "@reduxjs/toolkit"
import { modalReducer } from "./reducer.tsx"

export const store = configureStore({ reducer: modalReducer })
