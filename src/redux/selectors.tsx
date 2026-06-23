import { ModalState } from "./state.tsx"

export const selectModalCaption = (state: ModalState) => state.captionHeader
export const selectModalImages = (state: ModalState) => state.images
export const selectModalSelectedImage = (state: ModalState) => state.selectedImage
export const selectModalImage = (state: ModalState) => state
