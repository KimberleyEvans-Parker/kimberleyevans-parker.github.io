import { importAllPhotosFromFolder } from "../helpers/Helpers";
import { ContentItemType } from "./types";

const MotutapuImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Motutapu Island", false)
)
const McDonaldsFarmImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/McDonalds' Farm", false)
)
const Motuihe23Images = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Motuihe Island '23", false)
)
const QueerAImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Queer&A", false)
)
const Motuihe22Images = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Motuihe Island '22", false)
)
const Motuihe15Images = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Motuihe Island '15", false)
)
const PoppyImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Poppy Making", false)
)
const ClassRepImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Class Representative", false)
)


export const volunteerData: ContentItemType[] = [
    {
        heading: "Reforestation",
        subheading: "Motutapu Island", 
        dates: "July 2024",
        description: `I volunteered to help with the reforestation and conservation on Motutapu Island.  
            This involved planting native trees and shrubs to help restore the island to its natural state.
            The island is a predator-free sanctuary for native birds and lizards, and the work we did will help to ensure that it remains that way.`,
        images: MotutapuImages,
        seeMorelink: "https://www.motutapu.org.nz/"
    },
    {
        heading: "Growing Sapplings",
        subheading: "Motuihe Island",
        dates: "Feb 2023",
        description: `Today we were working in the nursery, potting up seedlings and sowing seeds.
            The seedlings will be planted out on the island later, and the seeds will be grown on to become seedlings for planting next year.
            I think now I have been involved in every stage of the process of reforestation on the island!`,
        images: Motuihe23Images,
    },
    {
        heading: "Speaker at a Queer&A Event",
        subheading: "University of Auckland", 
        dates: "July 2023",
        description: "I spoke at the Rainbow Engineering UoA and Women in Engineering Network Event about what the software industry was like for minorities.",
        images: QueerAImages,
        linkedInLink: "https://www.linkedin.com/posts/aryankaran_it-was-a-pleasure-to-mc-the-rainbow-engineering-ugcPost-7057242406928224257-7NGU"
    },
    {
        heading: "Conservation",
        subheading: "McDonalds' Farm",
        dates: "March 2023",
        description: `I volunteered to help with the conservation of the McDonalds' Farm in Auckland.  
            This involved removing weeds that were choking the native plants to give the natives the best chance of survival.
            The trees are an important part of the river ecosystem and the work we did will help to ensure that the river remains healthy.`,
        images: McDonaldsFarmImages,
        seeMorelink: "https://www.nzherald.co.nz/the-vision-is-clear/news/tree-mendous-planting-success/HYYT4LVYNHB6WRCX5FNLHSNIVQ/"
    },
    {
        heading: "Mentor",
        subheading: "Women in Tech",
        dates: "2022",
        description: "I mentored a student taking a conjoint at the university of Auckland into the STEM industry through the Women in Tech program.",
        seeMorelink: "https://wen.auckland.ac.nz/"
    },
    {
        heading: "Conservation",
        subheading: "Motuihe Island",
        dates: "March 2022",
        description: `I went back to Motuihe Island to help with the conservation of the island! 
        It was amazing to see the trees that I had planted in 2015 had grown so much and were now becoming a stong and healthy forest.
        This time our job was to remove the weeds from around the island and clear the pathways to make it easier for the public to walk around the island.`,
        images: Motuihe22Images,
    },
    {
        heading: "Class Rep",
        subheading: "Phil 222 and Logicomp 301",
        dates: "July 2019 - July 2020",
        description: "I represented the students in my class and communicate any questions, queries, concerns or feedback to the teacher.",
        images: ClassRepImages,
    },
    {
        heading: "Robogals",
        subheading: "STEM Teacher",
        dates: "April 2019 - July 2019",
        description: `I worked as a teacher with Robogals to encourage young children into STEM fields.  
        This was done with the aid of LEGO Mindstorm robots, which were able to be programmed by the children to navigate their way around a maze.`,
    },
    {
        heading: "Reforestation",
        subheading: "Motuihe Island",
        dates: "August 2015",
        description: `Motuihe Island used to be farmland, but we have helped transform it into a home for native birds and lizards.  
        During a restoration project as part of the Motuihe Island Restoration Trust, we planted 2,000 native trees around the island to help make the island a sanctuary for wild life`,
        images: Motuihe15Images,
    },
    {
        heading: "Poppy Making",
        dates: "April 2015",
        description: `I volunteered to help a small group of people make hundreds of poppies, sewn out of red fabric and buttons. 
        These were placed in the gardens of our school and given away as part of the ANZAC commemoration.  `,
        images: PoppyImages,
    },
]