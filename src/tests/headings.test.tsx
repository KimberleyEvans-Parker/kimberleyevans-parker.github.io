import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";


const pages = [
    // Home + About
    { path: "/", heading: /Kimberley Evans-Parker/i },
    { path: "/about", heading: /about/i },
];


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
            );

            expect(await screen.findByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
        }
    );
});
