import { render, screen } from "@testing-library/react";
import Settings from "@components/pages/Settings/Settings";

describe("Settings page works", () => {
    it("renders correctly", () => {
        render(<Settings />)
        expect(screen.getByRole("heading")).toHaveTextContent("Settings");
    })
})