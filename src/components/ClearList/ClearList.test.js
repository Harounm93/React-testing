import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClearList from "./index";

const testProps = {
  clearList: jest.fn(),
  buttonText: "Hello World",
};

test(`The clearList function should be called after the button has been clicked`, () => {
  const { getByTestId } = render(<ClearList {...testProps} />);
  const button = getByTestId("clearListFunction");
  fireEvent.click(button);
  expect(testProps.clearList).toHaveBeenCalled();
});

test(`The innerText of the button should be the same as the value of the buttonText prop`, () => {
  const { getByTestId } = render(<ClearList {...testProps} />);
  const button = getByTestId("clearListFunction");
  expect(button).toHaveTextContent("Hello World");
});
