import { render, screen } from "@testing-library/react";
import Credit from "@components/pages/Credit/Credit";

describe("Credit page works", () => {
    it("renders correctly", () => {
        render(<Credit />)
        expect(screen.getByRole("heading")).toHaveTextContent("Credit");
    })
})