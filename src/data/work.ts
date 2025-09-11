import { TECHNOLOGIES } from "../helpers/Constants"
import { importAllPhotosFromFolder } from "../helpers/Helpers"
import { ContentItemType } from "./types"

const Bricks4KidzImages = importAllPhotosFromFolder("work/Bricks4Kidz")
const SSSImages = importAllPhotosFromFolder("work/School Storage Solutions")
const GraduationPlushiesImages = importAllPhotosFromFolder("work/Graduation Plushies")
const OomaImages = importAllPhotosFromFolder("work/No.8 Wireless")


export const workData: ContentItemType[] = [
    {
        heading: "Software Engineer",
        subheading: "Xero",
        dates: { start: new Date(2022, 1), end: new Date(2025, 3) },
        description: `I started in the Xero grad programme, learning a variety of skills in fullstack, front end, back end, Android and iOS.  
            My love for design led me to becoming more front-end focused when becoming an associate and as an engineer.  
            During this time, I created webpages seen by 40,000 customers a day and conducted data-driven experiments, improving customer activation by 13-28%.  
            I was a feature lead, supporting the deprecation of outdated webpages, encouraging 5k users to align with updated government regulations known as STP2.  
            I performed maintenance and reliability work, adding tests, monitoring and alerting.  
            I also mentored and onboarded other engineers, helping them to develop and grow.  
            I also gained experience with C#, API calls, feature flags.  
            A highlight was a hakathon where we received the Customer Impact Award for adding a file upload section to an employee, which was the most requested feature in Payroll for multiple years.  
            I also won the Connected Workplaces Hackathon with a team of four, where we created a wellbeing hub - a dashboard for employees to easily see upcoming events, todos and summaries of their employees. `,
        links: {
            local: "/experience/work/xero",
        },
            technologies: [
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.TS,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.GIT,
            TECHNOLOGIES.CSHARP,
            TECHNOLOGIES.LAUNCH_DARKLY,
            TECHNOLOGIES.TEAM_CITY,
            TECHNOLOGIES.SUMO_LOGIC,
            TECHNOLOGIES.NEW_RELIC,
            TECHNOLOGIES.LIGHTHOUSE,
            TECHNOLOGIES.MIXPANEL
        ]
    },
    {
        heading: "Engineering Intern",
        subheading: "Rocos/Drone Deploy",
        dates: { start: new Date(2021, 3), end: new Date(2022, 0) },
        description: `I contracted for Rocos (later acquired by Drone Deploy) - a PAAS company that gives people with robots a platform to easily manage, monitor and control them.  
            During this time, I created a page for Rocos to monitor the health of their various services.
            I also created widgets that users could add to their dashboard to monitor their robots and made many other css improvements.  
            I gained experience working in Angular and becoming familiar with new codebases.
            A highlight was a hakathon where we added a live 360 feed to the Boston Dynamic robot dog 
            so that you could remotely view and control it live.`,
        technologies: [
            TECHNOLOGIES.ANGULAR,
            TECHNOLOGIES.HTML,
            TECHNOLOGIES.CSS,
            TECHNOLOGIES.GIT
        ]
    },
    {
        heading: "Engineering Intern",
        subheading: "FlexWare",
        dates: { start: new Date(2020, 8), end: new Date(2021, 10) },
        description: `I manufactured cables for a variety of purposes, have tested both hardware and software 
            and have gained experience programming in C#.`,
        technologies: [
            TECHNOLOGIES.GIT,
            TECHNOLOGIES.CSHARP
        ]
    },
    {
        heading: "Research Assistant",
        subheading: "University of Auckland",
        dates: { start: new Date(2021, 5) },
        description: `I worked as a research assistant for the University of Auckland for Doctor Catherine Watson.
            During this time, I worked on a project to create a Māori text-to-speech voice using AI.`,
        technologies: [
            TECHNOLOGIES.PYTHON,
            TECHNOLOGIES.AI
        ]
    },
    {
        heading: "Teacher",
        subheading: "Bricks4Kidz",
        dates: { start: new Date(2020, 0) },
        description: `Inspired children (ages 4–12) to explore STEM through LEGO-based learning, teaching at holiday and after-school programs.
            Led hands-on activities from creative builds and mosaics to LEGO Technic roller coasters and Mindstorms robotics
            Encouraged problem-solving, teamwork, and creativity while introducing concepts in mechanics, programming and design.`,
        images: Bricks4KidzImages,
    },
    {
        heading: "Co-Founder",
        subheading: "School Storage Solutions",
        dates: { start: new Date(2016, 2) },
        description: `As part of the Young Enterprise Scheme, I created a business that rents out lockers to students.  
            This made a profit in its first year and is still being run alongside my studies.  
            During my time in my business, I have gained experience communicating with producers and customers, 
            designing and manufacturing the lockers, working with marketing and sales and designing a website.  `,
        images: SSSImages
    },
    {
        heading: "Co-Founder",
        subheading: "Graduation Plushies",
        dates: { start: new Date(2020, 9) },
        description: `I co-founded this service which custom-makes graduation hats for soft toys.
            These have been quite popular for graduates and friends of grads and we were able to make a profit in our first year.  `,
        images: GraduationPlushiesImages,
        links: {
            seeMore: "https://www.facebook.com/gradplushies/",
        }
    },
    {
        heading: "Tutor",
        subheading: "Compsci 220 and Compsci 367",
        dates: { start: new Date(2019, 8), end: new Date(2020, 10) },
        description: `I was approached by a student in Compsci 220 and Compsci 367 to tutor them in these courses I had taken.
            I found it extremely rewarding to watch them learn and improve in the course.`
    },
    {
        heading: "Software Engineering Intern",
        subheading: "No. 8 Wireless",
        dates: { start: new Date(2019, 5) },
        description: `I developed an automated testing system for the phones that Ooma - a U.S. company.  
            During this, I gained experience with Git, Python and hardware.`,
        images: OomaImages,
        technologies: [
            TECHNOLOGIES.GIT,
            TECHNOLOGIES.PYTHON
        ]
    },
    {
        heading: "Cashiers",
        subheading: "Gilmours",
        dates: { start: new Date(2016, 3) },
        description: `I worked as a cashier/checkout operator for Gilmours - a wholesale food company.  
            During this, I improved my efficiency and interpersonal skills`
    }
]
