import { importAllPhotosFromFolder } from "../helpers/Helpers";
import { ContentItemType } from "./types";

const MotuiheImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Motuihe Island", false)
  );
  const PoppyImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Poppy Making", false)
  );
  const ClassRepImages = importAllPhotosFromFolder(
    require.context("../assets/volunteer/Class Representative", false)
  );


export const volunteerData: ContentItemType[] = [
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
        images: MotuiheImages,
    },
    {
        heading: "Poppy Making",
        dates: "April 2015",
        description: `I volunteered to help a small group of people make hundreds of poppies, sewn out of red fabric and buttons. 
        These were placed in the gardens of our school and given away as part of the ANZAC commemoration.  `,
        images: PoppyImages,
    },
]