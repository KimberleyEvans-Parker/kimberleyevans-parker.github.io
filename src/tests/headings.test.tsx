import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import { Provider } from "react-redux"
import { store } from "../redux/store"


const pages = [
    // Home + About
    { path: "/", heading: /Kimberley Evans-Parker/i },
    { path: "/about", heading: /about/i },

    // Experience
    { path: "/experience", heading: /experience/i },
    { path: "/experience/work", heading: /work experience/i },
    { path: "/experience/volunteer", heading: /volunteer work/i },
    { path: "/experience/projects", heading: /projects/i },
    { path: "/experience/awards", heading: /awards/i },
    { path: "/experience/work/xero", heading: /xero/i },

    // Hobbies
    { path: "/hobbies", heading: /hobbies/i },
    { path: "/hobbies/lego", heading: /lego/i },
    { path: "/hobbies/art", heading: /art/i },
    { path: "/hobbies/cosplays", heading: /cosplays/i },
    { path: "/hobbies/photography", heading: /photography/i },
    { path: "/hobbies/travel", heading: /travel/i },

    // 404
    { path: "/some-nonsense", heading: /404/i },
]


describe("Page headings", () => {
    it.each(pages)(
        "renders correct heading for %s",
        async ({ path, heading }) => {
            render(
                <Provider store={store}>
                    <MemoryRouter initialEntries={[path]}>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </MemoryRouter>
                </Provider>
            )

            expect(await screen.findByRole("heading", { level: 1, name: heading })).toBeInTheDocument()
        }
    )
})
