import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputList from "./index";

const testProps = {
  addToList: jest.fn(),
  buttonText: "We love coding!",
};

test(`The clearList function should be called after the button has been clicked`, () => {
  const { getByTestId } = render(<InputList {...testProps} />);
  const button = getByTestId("addToListButton");
  fireEvent.click(button);
  expect(testProps.addToList).toHaveBeenCalled();
});

test(`The innerText of the button should be the same as the value of the buttonText prop`, () => {
  const { getByTestId } = render(<InputList {...testProps} />);
  const button = getByTestId("addToListButton");
  expect(button).toHaveTextContent("We love coding!");
});
