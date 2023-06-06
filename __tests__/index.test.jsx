import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render home", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      pressed: true,
    });

    expect(button).toBeInTheDocument();
  });
});
