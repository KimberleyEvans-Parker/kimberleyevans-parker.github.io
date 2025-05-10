import { createAction } from "@reduxjs/toolkit"
import { ModalState } from "./state"

export const resetImage = createAction("modal/reset")
export const setImage = createAction<ModalState>("modal/setImage")
