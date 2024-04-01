import { render, screen } from "@testing-library/react";
import Home from "@components/pages/Home/Home";

describe("Home page works", () => {
    it("renders correctly", () => {
        render(<Home />)
        expect(screen.getByRole("heading")).toHaveTextContent("Home");
    })
})