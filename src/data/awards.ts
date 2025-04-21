import { TECHNOLOGIES } from "../helpers/Constants";
import { importAllPhotosFromFolder } from "../helpers/Helpers";
import { ContentItemType } from "./types";


const KrayonImages = importAllPhotosFromFolder(
    require.context("../assets/awards/2020 DEVS Hackathon", false)
)
const MYOBImages = importAllPhotosFromFolder(
    require.context("../assets/awards/MYOB IT Challenge", false)
)
const CertificateImages = importAllPhotosFromFolder(
    require.context("../assets/awards/Certificates", false)
)
const ConnectedWorkplacesHackathonImages = importAllPhotosFromFolder(
    require.context("../assets/awards/Connected Workplaces Hackathon", false)
)
const WdccSesaImages = importAllPhotosFromFolder(
    require.context("../assets/awards/WDCC SESA Hackathon", false)
)


export const awardsData: ContentItemType[] = [
    {
        heading: "Customer Impact Award",
        subheading: "Xero",
        dates: "April 2024",
        description: `I was awarded the Impact Award in the Xero wide hackathon.  
            My team worked on adding a file upload feature to the notes tab, which was the most requested feature in Payroll for multiple years running.  
            I implemented the UI webpage to allow users to upload, download and view files for their employees.  
            The team also worked on ensuring the file was securely stored and only able to be accessed by those with the right permissions.  
            This award is given to hackathon teams who have made a significant impact on the customer experience, and I am proud to have worked on this.`,
        technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.TS,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.GIT,
        ]
    },
    {
        heading: "1st Place",
        subheading: "Xero Connected Workplaces Hackathon",
        dates: "September 2022",
        description: `I was awarded 1st place at a Xero-organised hackathon within my area Connected Workplaces. 
            My team and I created a wellbeing hub - a dashboard for employees to easily see upcoming events, todos and summaries of their employees.
            We worked together in an agile environment over a week and showcased our working project to the judges.`,
        technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.TS,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.GIT,
        ],
        images: ConnectedWorkplacesHackathonImages,
    },
    {
        heading: "Best Idea",
        subheading: "Drone Deploy Hackathon",
        dates: "January 2022",
        description: `I was awarded best idea at the Drone Deploy hackathon. 
            My team and I implemented a way for users to view and control a live 360 feed of their robot.  
            For our example, we used the Boston Dynamics robot dog and created a widget users could add to their dashboard to view the live 360 feed.`,
    },
    {
        heading: "University Certificates of Outstanding Achievment",
        dates: "2021",
        description: "I received several certificates of outstanding achievment for my hard work during university.",
        images: CertificateImages,
    },
    {
        heading: "3rd Place",
        subheading: "WDCC and SESA Hackathon",
        dates: "August 2021",
        description: `I was awarded 3rd place at the WDCC and SESA Hackathon.`,
        images: WdccSesaImages,
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
        links: {
            seeMore: "https://www.auckland.ac.nz/en/news/2020/10/09/heart-healer-app-a-winner.html",
        }
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
        links: {
            project: "Eventigate",
        }
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
        heading: "Best Manaufacturer Award",
        subheading: "Young Enterprise Scheme",
        dates: "September 2017",
        description: `As part of the Young Enterprise Scheme, I co-founded the company School Storage Solutions.  
            During this, we made lockers to be rented out by students at school.  
            For our creation of the lockers, we received the Best Manufacturer Award.  `,	
    },
    {
        heading: "Alice Programming Competition",
        subheading: "2nd place",
        dates: "April 2016",
        description: `My partner and I received 2nd place for a competition in the Alice programming environment.
            During this, we were able to create 3D animations to fit a desired script, within a given time frame.`,
    },
]
