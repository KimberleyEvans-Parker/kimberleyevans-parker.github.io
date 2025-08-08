import { Modal } from "../components/modal/Modal";
import { workData } from "../../data/work";
import { DateSubheading } from "../components/content item/DateSubheading";
import { awardsData } from "../../data/awards";
import { ContentItem } from "../components/content item/ContentItem";
import { xerGeneralDescriptions, xeroData } from "../../data/xero";

export const Xero = () => {
    let animationDelay = 0;

    const getAnimationDelay = () => {
        const animationDelaySeconds = animationDelay.toString() + "s";
        animationDelay += (2 - animationDelay) / 10
        return animationDelaySeconds;
    };

    const xeroGeneralData = workData.find((project) => project.subheading === "Xero")
    const xeroAwards = awardsData.filter((award) => award.subheading?.includes("Xero"))


    return (
        <div className="content-container">
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
            {xerGeneralDescriptions.map((description, index) => (
                <p
                    key={index}
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
            <div className="fade left"
                style={{animationDelay: getAnimationDelay()}}
            >
                {xeroAwards.map((award, index) => (
                    <ContentItem
                        key={index}
                        contentData={award}
                        animationDelay={getAnimationDelay()}
                        imgOnLeft={index % 2 === 0}
                    />
                ))}
                {xeroData.map((project, index) => (
                    <ContentItem
                        key={index}
                        contentData={project}
                        animationDelay={getAnimationDelay()}
                        imgOnLeft={index % 2 === 0}
                    />
                ))}
            </div>

        </div>
    );
}
