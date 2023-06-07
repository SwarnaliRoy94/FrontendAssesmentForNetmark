import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Expandable from "../src/components/expandable/expandable";
import { FaChevronCircleUp } from "react-icons/fa";

describe("test expandable component", () => {
  const header = "Header Content";
  const body = "Body Content";
  it("should render header, icon & body when open", () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Expandable isOpen={true} updateItemId={() => {}}>
        <Expandable.Header>{header}</Expandable.Header>
        <Expandable.Icon icon={<FaChevronCircleUp />} />
        <Expandable.Body>{body}</Expandable.Body>
      </Expandable>
    );

    expect(getByText(header)).toBeInTheDocument();
    expect(getByText(body)).toBeInTheDocument();
  });

  it("should render header and icon when closed", () => {
    const { getByText, queryByText, getByTestId } = render(
      <Expandable isOpen={false} updateItemId={() => {}}>
        <Expandable.Header>{header}</Expandable.Header>
        <Expandable.Icon
          icon={<FaChevronCircleUp data-testid="expand-icon" />}
        />
        <Expandable.Body>{body}</Expandable.Body>
      </Expandable>
    );

    expect(getByText(header)).toBeInTheDocument();
    expect(getByTestId("expand-icon")).toBeInTheDocument();
    expect(queryByText(body)).toBeNull();
  });

  it("should call updateItemId when clicked on header", () => {
    const updateItemIdMock = jest.fn(); //creating a mock function

    const { getByText } = render(
      <Expandable isOpen={false} updateItemId={updateItemIdMock}>
        <Expandable.Header>{header}</Expandable.Header>
        <Expandable.Icon
          icon={<FaChevronCircleUp data-testid="expand-icon" />}
        />
        <Expandable.Body>{body}</Expandable.Body>
      </Expandable>
    );

    //creating an instance for header component
    const headerElement = getByText(header);
    //fire a click event
    fireEvent.click(headerElement);

    expect(updateItemIdMock).toHaveBeenCalledTimes(1);
  });
});
