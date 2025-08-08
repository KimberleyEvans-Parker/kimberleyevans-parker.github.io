import { initialState } from "./state"

export function modalReducer(
    state = initialState,
    action: { type: string; payload?: any }
) {
    if (action.type === "modal/reset") {
        return {
            ...state,
            images: undefined,
            selectedImage: undefined,
            captionHeader: "",
        }
    }
    if (action.type === "modal/setImage") {
        return {
            ...state,
            images: action.payload.images,
            selectedImage: action.payload.selectedImage,
            captionHeader: action.payload.captionHeader,
        }
    }

    return state
}
