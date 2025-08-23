import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { Navigation } from "./Navigation"
import { SubNavbar } from "./SubNavbar"
import App from "../../App"
import { Provider } from "react-redux"
import { store } from "../../redux/store"


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

const experienceSubHeadingsAndHeadings = [
    { linkName: "Work", heading: "Work Experience" },
    { linkName: "Volunteer", heading: "Volunteer Work" },
    { linkName: "Projects", heading: "Projects" },
    { linkName: "Awards", heading: "Awards and Achievments" },
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
    const testSubHeadings = ["Test1", "Test2", "Test3"]

    render(
        <BrowserRouter>
            <SubNavbar section="Test" headings={testSubHeadings} />
        </BrowserRouter>
    )

    testSubHeadings.forEach(subHeading => {
        const subLink = screen.getByRole("link", { name: subHeading })
        subLink.click()
        expect(window.location.pathname).toBe(`/test/${subHeading.toLowerCase()}`)
    })
})

test("navigation via navbar works correctly", async () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 1024 });
    window.dispatchEvent(new Event("resize"));
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        </Provider>
    )

    expect(await screen.findByRole("heading", { name: "Kimberley Evans-Parker" })).toBeInTheDocument()
})

