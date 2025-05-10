export interface ModalState {
    images: string[] | undefined;
    selectedImage: number | undefined;
    caption: string;
}

export const initialState: ModalState = {
    images: undefined,
    selectedImage: undefined,
    caption: "",
}
