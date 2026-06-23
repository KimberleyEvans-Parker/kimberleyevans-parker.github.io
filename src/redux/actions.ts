import { ModalState } from "./state.tsx"
import { createAction } from "@reduxjs/toolkit"

export const resetImage = createAction("modal/reset")
export const setImage = createAction<ModalState>("modal/setImage")
