import { ModalState } from "./state.ts"
import { createAction } from "@reduxjs/toolkit"

export const resetImage = createAction("modal/reset")
export const setImage = createAction<ModalState>("modal/setImage")
