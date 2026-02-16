import { ContentItemType } from "./types"
import { importAllPhotosFromFolder } from "../helpers/Helpers"

const RimuBookshelf = importAllPhotosFromFolder("hobbies/Creations/Rimu Bookshelf")


export const creationsData: ContentItemType[] = [
    {
        heading: "Rimu Bookshelf",
        subheading: "Woodwork",
        dates: { start: new Date(2019, 1) },
        images: RimuBookshelf,
        description: `I designed and created a bookshelf out of spare rimu wood.  
            The process involved designing the bookshelf, cutting the wood to size, sanding the pieces, and then routing some of the pieces to add some decorative elements.
            I oiled and waxed the wood to protect it and bring out its natural beauty, and then assembled the bookshelf using screws. `,
    },
]
