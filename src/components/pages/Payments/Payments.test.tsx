import { render, screen } from "@testing-library/react";
import Payments from "@components/pages/Payments/Payments";

describe("Payments page works", () => {
    it("renders correctly", () => {
        render(<Payments />)
        expect(screen.getByRole("heading")).toHaveTextContent("Payments");
    })
})