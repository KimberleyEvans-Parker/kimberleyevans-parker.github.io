import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "../App"; // or the component that defines your routes

const pages = [
  { path: "/", heading: /Kimberley Evans-Parker/i },
  { path: "/about", heading: /about/i },
  { path: "/experience", heading: /experience/i },
  { path: "/hobbies", heading: /hobbies/i },
];

describe("Page headings", () => {
  it.each(pages)(
    "renders correct heading for %s",
    async ({ path, heading }) => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>
      );

      expect(await screen.findByRole("heading", { name: heading })).toBeInTheDocument();
    }
  );
});
