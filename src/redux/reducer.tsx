import { initialState } from "./state"

export function modalReducer(
    state = initialState,
    action: { type: string; data?: any }
) {
    if (action.type === "modal/reset") {
        return {
            ...state,
            images: [],
            selectedImage: undefined,
            caption: "",
        }
    }
    if (action.type === "modal/setImage") {
        return {
            ...state,
            images: action.data.images,
            selectedImage: action.data.selectedImage,
            caption: action.data.caption,
        }
    }

    return state
}
