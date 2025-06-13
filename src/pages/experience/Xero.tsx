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

    const xeroGeneralData = workData.find((project) => project.subheading === "Xero")

    const descriptions = [
        "I performed maintenance and reliability work, adding integration and e2e tests and updating TeamCity pipelines.  ",
        "I also mentored and onboarded three graduate engineers, helping them to become productive members of the team and teaching them skills such as React, Typescript and CSS.  ",
        "I encouraged availability by ensuring all of our pages were adequately monitored and added alerting with tools such as New Relic, Sumo Logic and Lighthouse.  ",
        "I used Launch Darkly to control releases to customers, with some feature flags getting evaluated 10k-100k times a day.  ",
        "A highlight was a hakathon where we received the Customer Impact Award for adding a file upload section to an employee, which was the most requested feature in Payroll for multiple years.  ",
        "I also won the Connected Workplaces Hackathon with a team of four, where we created a wellbeing hub - a dashboard for employees to easily see upcoming events, todos and summaries of their employees. "
    ]


    return (
        <div className="content-container experience-container">
            <Modal />
            <h1 className="fade left"
                style={{animationDelay: getAnimationDelay()}}
            >
                Xero
            </h1>
            <h2 className="fade left"
                style={{animationDelay: getAnimationDelay()}}
            >
                {xeroGeneralData?.heading}
            </h2>
            <div className="fade left"
                style={{animationDelay: getAnimationDelay()}}
            >
                <DateSubheading {...xeroGeneralData?.dates} />
            </div>
            {descriptions.map((description, index) => (
                <p
                    className="fade left"
                    style={{animationDelay: getAnimationDelay()}}
                >
                    {description}
                </p>
            ))}
            <div 
                className="technologies fade left"
                style={{animationDelay: getAnimationDelay()}}
            >
                {xeroGeneralData?.technologies && xeroGeneralData?.technologies.join(` ⸎ `)}
            </div>

        </div>
    );
}
