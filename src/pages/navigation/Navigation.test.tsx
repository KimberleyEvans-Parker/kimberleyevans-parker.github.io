import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation";
import { SubNavbar } from "./SubNavbar";


const headings = [
    "Kimberley Evans-Parker",
    "About",
    "Experience",
    "Hobbies",
]

const experienceSubHeadings = [
    "Work Experience",
    "Volunteer Work",
    "Projects",
    "Awards",
]

const hobbiesSubHeadings = [
    "Lego",
    "Art",
    "Cosplays",
    "Photography",
    "Travel",
]


test("renders all navbar headings", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )

    headings.forEach(heading => {
        expect(screen.getByRole("link", { name: heading })).toBeInTheDocument()
    })
})

test("renders experience subheadings", () => {
    render(
        <BrowserRouter>
            <SubNavbar section="Experience" headings={experienceSubHeadings} />
        </BrowserRouter>
    )

    experienceSubHeadings.forEach(subHeading => {
        expect(screen.getByRole("link", { name: subHeading })).toBeInTheDocument()
    })
})

test("renders hobbies subheadings", () => {
    render(
        <BrowserRouter>
            <SubNavbar section="Hobbies" headings={hobbiesSubHeadings} />
        </BrowserRouter>
    )

    hobbiesSubHeadings.forEach(subHeading => {
        expect(screen.getByRole("link", { name: subHeading })).toBeInTheDocument()
    })
})
