import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation";


const headings = [
    "Kimberley Evans-Parker",
    "About",
    "Experience",
    "Hobbies",
]


test("renders all navbar links", () => {
    render(
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )

    headings.forEach(heading => {
        expect(screen.getByRole("link", { name: heading })).toBeInTheDocument()
    })
})

