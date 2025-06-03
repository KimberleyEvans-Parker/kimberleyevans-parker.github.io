import { Link } from "react-router-dom"
import { LinksType } from "../../../data/types"
import { AUnderline, LinkUnderline } from "../links"

export const LinksSection = (links?: LinksType) => {
    if (!links) return <></>

    return (
        <>
            <AUnderline
                text="See the LinkedIn post here!"
                href={links?.linkedIn}
                width="245px"
                popout="linkedin"
            />
            <AUnderline
                text="For more information, take a look here"
                href={links?.seeMore}
                width="330px"
            />
            <LinkUnderline
                text="See the project here"
                href={links?.project && `/experience/projects#${links?.project}`}
                width="180px"
            />
            <LinkUnderline
                text="See more here"
                href={links?.local}
                width="135px"
            />
        </>
    )
}