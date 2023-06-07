import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import { faqItems } from "../src/app/page";

describe("Home component", () => {
  it("should render frequently asked questions", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Frequently Asked Questions")).toBeInTheDocument();
  });

  it("should render all the faq headers", () => {
    const { getByText } = render(<Home />);
    //checking if all the items are rendering properly
    faqItems.forEach((item) => {
      const headerElement = getByText(item.header);
      expect(headerElement).toBeInTheDocument();
    });
  });

  it("should render content body when clicked for all components", () => {
    const { getByText } = render(<Home />);
    faqItems.forEach((item) => {
      const headerElement = getByText(item.header);
      fireEvent.click(headerElement);
      const bodyElement = getByText(item.content);
      expect(bodyElement).toBeInTheDocument();
    });
  });
});
