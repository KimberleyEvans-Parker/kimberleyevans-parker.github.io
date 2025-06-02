export interface ModalState {
    images: string[] | undefined;
    selectedImage: number | undefined;
    captionHeader: string;
}

export const initialState: ModalState = {
    images: undefined,
    selectedImage: undefined,
    captionHeader: "",
}
