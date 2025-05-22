import { Modal } from "../components/Modal";
import { workData } from "../../data/work";
import { DateSubheading } from "../components/content item/DateSubheading";

export const Xero = () => {
    let animationDelay = 0;

    const getAnimationDelay = () => {
        const animationDelaySeconds = animationDelay.toString() + "s";
        animationDelay += (2 - animationDelay) / 10
        return animationDelaySeconds;
    };

    const xeroData = workData.find((project) => project.subheading === "Xero")

    const descriptions = [
        "I started in the Xero grad programme, going through four rotations and learning about fullstack, front end, back end, Android and iOS skills.  ",
        "I settled as a front-end full stack engineer when becoming an associate and as an engineer.  ",
        "During this time, I created webpages seen by 40,000 customers a day, utilising HTML, CSS, React, Typescript and XUI (Xero's UI component library) to create, modernise and improve webpages.  ",
        "I also used C# and API endpoints to store and retrieve customer data.  I gained practical experience in agile teams, delivering customer facing code.  ",
        "I also was a feature lead, supporting the deprecation of outdated webpages, encouraging 5k users to align with updated government regulations known as STP2.  ",
        "I performed maintenance and reliability work, adding integration and e2e tests and updating TeamCity pipelines.  ",
        "I also mentored and onboarded three graduate engineers, helping them to become productive members of the team and teaching them skills such as React, Typescript and CSS.  ",
        "I encouraged availability by ensuring all of our pages were adequately monitored and added alerting with tools such as New Relic, Sumo Logic and Lighthouse.  ",
        "I developed two webpages to improve the payroll onboarding flow, the first touchpoint for customers exploring Payroll.  ",
        "During this I conducted data-driven experiments with Mix Panel Beanie events to improve customer journeys.  ",
        "This experiment increased Payroll customer activation in the UK by 28% and 13% in NZ.  ",
        "I used Launch Darkly to control releases to customers, with some feature flags getting evaluated 10k-100k times a day.  ",
        "A highlight was a hakathon where we received the Customer Impact Award for adding a file upload section to an employee, which was the most requested feature in Payroll for multiple years.  ",
        "I also won the Connected Workplaces Hackathon with a team of four, where we created a wellbeing hub - a dashboard for employees to easily see upcoming events, todos and summaries of their employees. "
    ]

    return (
        <div className="content-container experience-container">
            <Modal />
            <h1 className="fade left"
                style={{
                    animationDelay: getAnimationDelay(),
                }}>
                Xero
            </h1>
            <h2 className="fade left"
                style={{
                    animationDelay: getAnimationDelay(),
                }}>
                {xeroData?.heading}
            </h2>
            <div className="fade left"
                style={{
                    animationDelay: getAnimationDelay(),
                }}>
                <DateSubheading {...xeroData?.dates} />
            </div>
            {descriptions.map((description, index) => (
                <p
                    className="fade left"
                    style={{
                        animationDelay: getAnimationDelay(),
                    }}
                >
                    {description}
                </p>
            ))}
            <div 
                className="technologies fade left"
                style={{
                    animationDelay: getAnimationDelay(),
                }}
            >
                {xeroData?.technologies && xeroData?.technologies.join(` ⸎ `)}
            </div>

        </div>
    );
}
