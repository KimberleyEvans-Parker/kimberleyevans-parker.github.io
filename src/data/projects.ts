import { TECHNOLOGIES } from "../helpers/Constants";
import { importAllPhotosFromFolder } from "../helpers/Helpers";
import { ContentItemType } from "./types";

const QuotleImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Quotle")   
);
const EmpowerImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Empower")
);
const Industry4Images = importAllPhotosFromFolder(
    require.context("../assets/projects/Industry 4.0")
);
const BookBrowserImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Book Browser")
);
const HeartHealerImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Heart Healer")
);
const UpskillImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Upskill")
);
const DotoImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Doto")
);
const FeedrImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Feedr")
);
const EnvirobotImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Envirobot")
);
const RollForReactionImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Roll for Reaction")
);
const FlikImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Flik")
);
const EventigateImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Eventigate")
);
const AshasQuestImages = importAllPhotosFromFolder(
    require.context("../assets/projects/Asha's Quest")
);

export const projectData: ContentItemType[] = [
    {
        heading: "Kimberley Evans-Parker's Portfolio",
        subheading: "This Website",
        dates: { start: new Date(2020, 0), end: "Present" },
        description: `This is my personal portfolio website, custom built and designed using React, TypeScript HTML and CSS.
            It is designed to showcase my skills, projects, and experience in a fun way.
            I hope you enjoy exploring it as much as I enjoyed making it!`,
        teamSize: 1,
        links: { 
            github: "https://github.com/KimberleyEvans-Parker/kimberleyevans-parker.github.io",
            seeMore: "kimberley.evans-parker.com"
         },
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.TS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Werewolf",
        subheading: "app to help the DM track the Werewolf game",
        dates: { start: new Date(2022, 0), end: "Present" },
        description: `A web application to help the DM track the Werewolf game, made for a friend.  
            It allows you to create a game, add players and roles, and then track the game as it progresses.  
            You can track who has been attacked, who has been saved and who has travelled where and it monitors who has been killed.  
            The application is made using React, TypeScript, HTML and CSS.`,
        teamSize: 1,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.TS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Quotle",
        subheading: "Daily Movie Guesser",
        dates: { start: new Date(2023, 3) },
        description: 
            `A daily movie guessing game, where you guess the movie from the quote.  
            Each day, a new quote is given to you, and you have to guess the movie.  
            The game is played in a similar way to Wordle, where you have 6 guesses to get the answer.  
            The game is hosted on vercel and uses basic google sheets for data analytics.`,
        teamSize: 2,
        links: { seeMore: "https://quotle-game.vercel.app/" },
        images: QuotleImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.TS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Menstrumate",
        subheading: "We the Women Hack",
        dates: { start: new Date(2023, 6) },
        description: `As part of the We the Women Hack, run by Girlboss, I was invited to create a project to help women in some way.  
            My team felt one of the worst feelings we got was when you realised you were caught out without menstrual products.
            We created Menstrumate, an app for girls caught out in this situation.
            The app allows you to find the nearest place to get menstrual products, and also allows you to donate products to those in need.
            We think this app will help take away the stress of being caught out, and also help those who are less fortunate than us.`,
        teamSize: 5,
        technologies: [TECHNOLOGIES.FIGMA]
    },
    {
        heading: "Mist Opportunity",
        subheading: "Terrible Ideas Hackathon",
        dates: { start: new Date(2023, 3) },
        description: `A hackathon project made during the Terrible Ideas Hackathon, where we had to make something not useful for anyone.  
            Our team name was Water Wasters and we made a product Mist Opportunity.  
            This was an automated water sprinkler that turned on under two conditions: 
            It detected water or someone was standing right next to it.  
            Jokes aside, we got to learn about using an arduino with different sensors and soldered, wired and coded this from scratch.  
            So not only did we have fun creating something silly, but also got to experiment and learnt a bunch.`,
        teamSize: 3,
        technologies: [TECHNOLOGIES.C]
    },
    {
        heading: "Empower",
        subheading: "Network to Empower Women",
        dates: { start: new Date(2022, 6) },
        description: "I was invited to the We the Women Hackfest, run by Girlboss. During this, my team of five focused on ways we could help women dependent on others for a living.  We created Empower.  A network of support for women to provide resources and people so that they can regain their independence.  ",
        teamSize: 5,
        links: { github: "https://github.com/Eva-Sorensen/empower" },
        images: EmpowerImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Book Browser",
        subheading: "Book Library",
        dates: { start: new Date(2021, 10) },
        description: 
            `A book library application made by a team of 2 for a university assignment.  
            This is a web application that allows you to search for books, view their author and details and add them to your personal library.  
            It also allows you to view your personal library and see which books you have read, are currently reading or want to read.  
            I had a lot of fun making extra animations to give it the look and feel of a book library, such as the books flipping open when you hover on them.
            The application was made using a Python backend, and an HTML and CSS frontend.`,
        teamSize: 2,
        links: { github: "https://github.com/KimberleyEvans-Parker/BookBrowser" },
        images: BookBrowserImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS]
    },
    {
        heading: "Habidapt",
        subheading: "Global Game Jam 2021",
        dates: { start: new Date(2021, 7) },
        description: 
            `A game made during the Global Game Jam 2021, by a team of 5.  
            This is a boardgame about animals adapting to their environment.  
            It is a two-team game, where you work with your team-mates in a fun environment to collect different types of animals so that you can traverse across different terrains.  
            To make the game, we utilised the laser-cutter to create the tiles and the 3D printer to create the tokens.  
            We also designed cards for the game that made the deck with different animals and abilities in it.  
            The game was certainly a great learning experience and I also enjoyed playing it.`,
        teamSize: 5,
        technologies: [TECHNOLOGIES.LASER_CUTTING, TECHNOLOGIES.PRINTING_3D]
    },
    {
        heading: "Industry 4.0",
        subheading: "Machine Health Monitoring Software",
        dates: { start: new Date(2020, 7), end: new Date(2020, 10) },
        description: "A cross-platform application made by 8 people following agile practices.  The application was able to take data from different machines and sensors and display them to the technicians.  Users would be able to view this data in real-time, and see historical data, and receive notifications when a machine reported unhealthy readings.  The project which we started for our Product Owner has received funding to continue its production.  ",
        teamSize: 8,
        links: { github: "https://github.com/KimberleyEvans-Parker/industry-4" },
        images: Industry4Images,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Heart Healer",
        subheading: "AI Counsellor",
        dates: { start: new Date(2020, 8) },
        description: "This was conceptualised for the 2020 MYOB IT challenge, in which the problems of isolation and quarantine were highlighted.  To combat the problems that arose through isolation and quarantine, we created Heart Healer.  Heart Healer is an AI chatbot and counsellor that monitors your mental wellbeing and productivity.  It can schedule in breaks for you, talk to you when you're lonely and connect you to other people.  This chatbot would be able to learn individual's preferences through an AI backend and connect people to their business or personal counsellor if needed.",
        teamSize: 4,
        images: HeartHealerImages
    },
    {
        heading: "Upskill",
        subheading: "Platform to connect and upskill",
        dates: { start: new Date(2020, 6) },
        description: "Upskill was made during the DEVS 2020 hackathon, in only 48 hours.  It is a a platform for live learning and teaching, where you connect and network with like-minded locals.  The platform also serves as a place for companies to post challenges and recruit bright minds.  Upskill aims to help those impacted by Covid 19, by allowing them to upskill and find new job opportunities.  ",
        teamSize: 6,
        links: { github: "https://github.com/Pyxxil/upskill" },
        images: UpskillImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.TS, TECHNOLOGIES.REACT]
    },
    {
        heading: "Roll for Reaction",
        subheading: "Turn-Based Dungeon Crawler RPG",
        dates: { start: new Date(2020, 2), end: new Date(2020, 5) },
        description: "Roll for Reaction is a turn-based dungeon crawler RPG written with React, Redux, JavaScript, HTML and CSS. It is an open-source fork of react-rpg and builds upon and enhances the base game. This is done by modifying and adding elements to lightly emulate the popular tabletop role-playing game Dungeons and Dragons: 5th Edition.",
        teamSize: 4,
        links: { github: "https://github.com/Matteas-Eden/roll-for-reaction" },
        images: RollForReactionImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Doto",
        subheading: "Calendar and To-Do App",
        dates: { start: new Date(2020, 2), end: new Date(2020, 4) },
        description: "An open-source software project for an online smart scheduling calendar and to-do app. It has the basic functionality of any calendar app and can be used to make to-do lists. It has smart scheduling capabilities, meaning the app will allocate inputted tasks in a suitable time in the user’s calendar. Doto uses Google auth to allow people to sign in. The development of Doto is done using the M.E.R.N (MongoDB, Express, React, Node) tech stack.",
        teamSize: 20,
        links: { github: "https://github.com/se701g2/Doto" },
        images: DotoImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "Feedr",
        subheading: "Media Feed Aggregator",
        dates: { start: new Date(2020, 2) },
        description: "A webapp for aggregating media feeds from various services into a single, uniform display for user convenience. We are using the React framework to manage the front-end UI and using a Java server utilising the Spring framework for the back-end. The back-end will call the API for the relevant media service and the front-end will visualise this data.",
        teamSize: 20,
        links: { github: "https://github.com/softeng-701-group-5/softeng-701-assignment-1" },
        images: FeedrImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT, TECHNOLOGIES.REDUX]
    },
    {
        heading: "A Little Midnight Music",
        subheading: "Research into Automatic Music Transcription",
        dates: { start: new Date(2020, 2), end: new Date(2020, 10) },
        description: "My partner and I did our part 4 research topic into the Automatic transcription of piano music.  During this project, research was conducted into Fourier Transform, STFT, Constant-Q, Onset/Beat Tracking, Machine Learning: Artificial, Convolutional and Recurrent Neural Networks.  Our neural network was an extension of the wav2mid project Jon Sleep created and converted wav files into the more computer-readable midi files.  ",
        teamSize: 2,
        links: { github: "https://github.com/KimberleyEvans-Parker/wav2mid" },
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.AI]
    },
    {
        heading: "Envirobot",
        subheading: "Platformer Game",
        dates: { start: new Date(2020, 1) },
        description: "Created for the Global Game Jam, by a team of 3.  This is set in the near future, where a robot aims to heal the planet by planting trees, putting out fires and repairing structures.  ",
        teamSize: 3,
        links: { github: "https://github.com/Pyxxil/GameJam" },
        images: EnvirobotImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.GDSCRIPT]
    },
    {
        heading: "Error 418: I'm a Teapot",
        subheading: "Terrible Ideas Hackathon",
        dates: { start: new Date(2019, 10) },
        description: `A hackathon project made during the Terrible Ideas Hackathon, where we had to make something not useful for anyone.  
            We made a the site "Error 418: I'm a Teapot", containing over 20 different terrible ideas.  
            From a qwik mafs calculator that spat out random numbers, a red stress button that fired an employee at random, or a button that would email a lecturer to tell them you wouldn't be coming to class with a very poor excuse.
            We also had a an insulting rubber duck and hydra - a site that would open 2 more tabs of itself whenever you tried to close it.  
            We had a lot of fun making this preoject.`,
        teamSize: 7,
        links: {
            seeMore: "https://terriblehack.com/"
        },
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS, TECHNOLOGIES.REACT]
    },
    {
        heading: "Flik",
        subheading: "Line Following Robot",
        dates: { start: new Date(2019, 6), end: new Date(2019, 9) },
        description: "A line-following robot that utilises a custom-made PCB with light sensors, a radio frequency module, ADC and PSoC.  Various shortest path algorithms were created for the robot to plan its traversal across the map, which were written in C.",
        teamSize: 4,
        links: { github: "https://github.com/Matteas-Eden/flik" },
        images: FlikImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.C]
    },
    {
        heading: "Midnight's Messages",
        subheading: "CherryPy Social Network",
        dates: { start: new Date(2019, 4), end: new Date(2019, 5) },
        description: "A social network similar to Twitter, which was developed individually in Python 3, on a CherryPy server.  It also utilises NaCl, json, jinja 2, HTML5 and CSS, JavaScript and cryptography.  This could authorize and report login from a login server to a main server run by the lecturer, and see how many web clients are online.  It could also send messages privately and in group chats while sending public 'tweets' out to all viewers, and block keywords and people from showing up. ",
        teamSize: 1,
        technologies: [TECHNOLOGIES.PYTHON, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JS]
    },
    {
        heading: "Eventigate",
        subheading: "Project During KPMG Hackathon",
        dates: { start: new Date(2019, 4) },
        description: `A hub for people to organise and meet up at a range of events with a specified host and location.  
            Aims to connect organisations and volunteer groups who wish to hold events with places people.  
            This was done by 6 people using JavaScript, HTML and CSS. 
            Won Best Presentation in the AUCS, KPMG hackathon.`,
        teamSize: 6,
        links: { github: "https://github.com/KimberleyEvans-Parker/Eventigate" },
        images: EventigateImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS]
    },
    {
        heading: "Kalah",
        subheading: "The Game Mancala",
        dates: { start: new Date(2020, 4) },
        description: "This is the game Mancala written in Java.  It was designed to promote good programming qualities such as modularity, modifiability and extendability.",
        teamSize: 1,
        links: { github: "https://github.com/KimberleyEvans-Parker/kalah" },
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]
    },
    {
        heading: "Scammr",
        subheading: "Phone Scam Detector",
        dates: { start: new Date(2019, 6) },
        description: "This app was developed during the 2019, 48-hour Devs Hackathon by a group of 6.  The app listened in to a call and warned you if it thought the caller was trying to scam you.  Sammr makes use of speech-to-text tools and an algorithm to decide the probability of the call being a scam.",
        teamSize: 6,
        links: { github: "https://github.com/Pyxxil/Scammr" },
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]
    },
    {
        heading: "Flappy Bird",
        subheading: "FPGA VHDL Side Scroller Game",
        dates: { start: new Date(2019, 3), end: new Date(2019, 4) },
        description: "A game based off Flappy Bird, created by a team of 2, using VHDL.  This was designed to be run on an Altera DE0 Board, equipped with an Altera Cyclone III 3C16 FPGA.  Understanding of the FPGA hardware, VHDL and Git were developed.",
        teamSize: 2,
        technologies: [TECHNOLOGIES.VHDL]
    },
    {
        heading: "Asha's Quest",
        subheading: "Java Dungeon Crawler",
        dates: { start: new Date(2019, 2), end: new Date(2019, 4) },
        description: "Asha's Quest is an action-adventure game in the vein of Zelda, created using Java, primarily Java Swing.  This was a 2-person project, with the game created from scratch.  Details of the project are available on the GitHub repository it was cloned to, shown through a GitHub Wiki.  Proficiency in Java 8 (particularly Java Swing and Java AWT) and Git developed.",
        teamSize: 2,
        links: { github: "https://github.com/KimberleyEvans-Parker/AshasQuest" },
        images: AshasQuestImages,
        technologies: [TECHNOLOGIES.GIT, TECHNOLOGIES.JAVA]
    },
    {
        heading: "Wireless Energy Monitor",
        dates: { start: new Date(2018, 7), end: new Date(2018, 10) },
        description: "Wireless Energy Monitor to display voltage, current and power for ELECTENG 209.  Comprised of a digital and an analogue section. Data receiver described in VHDL, transmitter programmed in C.  Receiver was a CPLD, transmitter was an ATMEGA328PB microcontroller on a self- designed PCB.  Breadboarding, LTSpice simulations and Oscilloscopes were used for testing.",
        teamSize: 2,
        technologies: [TECHNOLOGIES.VHDL]
    }
];