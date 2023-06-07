import React from "react";
import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import Home from "../src/app/page";
import { faqItems } from "../src/app/page";

describe("Home component", () => {
  it("should render frequently asked questions", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Frequently Asked Questions")).toBeInTheDocument();

    //checking if all the items are rendering properly
    faqItems.forEach((item) => {
      expect(getByText(item.header)).toBeInTheDocument();
    });
  });
});
