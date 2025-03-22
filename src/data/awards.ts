import { importAllPhotosFromFolder } from "../helpers/Helpers";
import { ContentItemType } from "./types";


const KrayonImages = importAllPhotosFromFolder(
    require.context("../assets/awards/2020 DEVS Hackathon", false)
  );
  const MYOBImages = importAllPhotosFromFolder(
    require.context("../assets/awards/MYOB IT Challenge", false)
  );
  const CertificateImages = importAllPhotosFromFolder(
    require.context("../assets/awards/Certificates", false)
  );


export const awardsData: ContentItemType[] = [
    {
        heading: "University Certificates of Outstanding Achievment",
        dates: "2021",
        description: "I received several certificates of outstanding achievment for my hard work during university.",
        images: CertificateImages,
    },
    {
        heading: "2020 MYOB IT Challenge",
        subheading: "3rd place",
        dates: "September 2020",
        description: `I competed in the MYOB IT Challenge with a team of 4 against over 140 other teams across Australia and New Zealand.  
        Our challenge was to come up with an AI-powered solution to a problem encountered during quarantine and isolation.  
        We decided to focus on the reduced productivity and mental well-being.  
        To combat this problem, we created Heart Healer - an AI chatbot, friend and counsellor, which you can view on my projects page.
        During the competition, there were two rounds - the first of which was a video pitch of our idea.  
        Six successful teams progressed to the second round, where we were able to get feedback, before pitching our idea live to the judges.
        My team - Whiz Craft - was awarded 3rd place overall, or 1st in New Zealand.`,
        images: MYOBImages,
        seeMorelink: "https://www.auckland.ac.nz/en/news/2020/10/09/heart-healer-app-a-winner.html",
    },
    {
        heading: "2020 DEVS Hackathon",
        subheading: "1st place",
        dates: "July 2020",
        description: `My team of 6 participated in the DEVS 48-hour Hackathon, making a demo platform; Upskill.  
        We took out market research to validate our idea and performed financial analysis.  
        In the end, my team was awarded 1st place!  
        We gained a huge amount of experience, and learnt a lot.  
        You can also see the project Upskill on my projects page.`,
        images: KrayonImages,
    },
    {
        heading: "AUCS Hackathon",
        subheading: "Best Presentation",
        dates: "May 2019",
        description:
            `My team of 6 was awarded best presentation during the 2019 AUCS, KPMG Hackathon.
            Our presentation included our project; Eventigate.  
            A platform for connecting event organisers, locations and people, which you can find out more about on my projects page.`,
    },
    {
        heading: "New Zealand Programming Competition",
        subheading: "3rd in New Zealand",
        dates: "June 2019",
        description: `We worked in a team of three to solve problems of a range of difficulties in Python, C or Java.
            100-point questions, in particular, were designed to be extremely difficult, but my team and I managed to work together to complete the problem.
            As a result of our hard work, team effort and problem-solving skills, our team ranked 2nd in Auckland and 3rd in New Zealand.`,
    },
    {
        heading: "Alice Programming Competition",
        subheading: "2nd place",
        dates: "April 2016",
        description: `My partner and I received 2nd place for a competition in the Alice programming environment.
            During this, we were able to create 3D animations to fit a desired script, within a given time frame.`,
    },
]
