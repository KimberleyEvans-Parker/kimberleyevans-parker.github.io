import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Navigation } from "./Navigation"
import { SubNavbar } from "./SubNavbar"


const headings = [
    "Kimberley Evans-Parker",
    "About",
    "Experience",
    "Hobbies",
]

const experienceSubHeadings = [
    "Work",
    "Volunteer",
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

test("navigates to the correct page on navbar link click", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )

    const aboutLink = screen.getByRole("link", { name: "About" })
    aboutLink.click()
    expect(window.location.pathname).toBe("/about")

    const experienceLink = screen.getByRole("link", { name: "Experience" })
    experienceLink.click()
    expect(window.location.pathname).toBe("/experience")

    const hobbiesLink = screen.getByRole("link", { name: "Hobbies" })
    hobbiesLink.click()
    expect(window.location.pathname).toBe("/hobbies")

    const homeLink = screen.getByRole("link", { name: "Kimberley Evans-Parker" })
    homeLink.click()
    expect(window.location.pathname).toBe("/")
})

test("navigates to the correct subheading page on sub-navbar link click", () => {
    render(
        <BrowserRouter>
            <SubNavbar section="Experience" headings={experienceSubHeadings} />
        </BrowserRouter>
    )

    const workLink = screen.getByRole("link", { name: "Work" })
    workLink.click()
    expect(window.location.pathname).toBe("/experience/work")

    const volunteerLink = screen.getByRole("link", { name: "Volunteer" })
    volunteerLink.click()
    expect(window.location.pathname).toBe("/experience/volunteer")

    const projectsLink = screen.getByRole("link", { name: "Projects" })
    projectsLink.click()
    expect(window.location.pathname).toBe("/experience/projects")

    const awardsLink = screen.getByRole("link", { name: "Awards" })
    awardsLink.click()
    expect(window.location.pathname).toBe("/experience/awards")
})

test("navigates to the correct hobbies subheading page on sub-navbar link click", () => {
    render(
        <BrowserRouter>
            <SubNavbar section="Hobbies" headings={hobbiesSubHeadings} />
        </BrowserRouter>
    )

    const legoLink = screen.getByRole("link", { name: "Lego" })
    legoLink.click()
    expect(window.location.pathname).toBe("/hobbies/lego")

    const artLink = screen.getByRole("link", { name: "Art" })
    artLink.click()
    expect(window.location.pathname).toBe("/hobbies/art")

    const cosplaysLink = screen.getByRole("link", { name: "Cosplays" })
    cosplaysLink.click()
    expect(window.location.pathname).toBe("/hobbies/cosplays")

    const photographyLink = screen.getByRole("link", { name: "Photography" })
    photographyLink.click()
    expect(window.location.pathname).toBe("/hobbies/photography")

    const travelLink = screen.getByRole("link", { name: "Travel" })
    travelLink.click()
    expect(window.location.pathname).toBe("/hobbies/travel")
})
