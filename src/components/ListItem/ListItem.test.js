import React from "react";
import { render,fireEvent } from "@testing-library/react";
import ListItem from "./index";

const testProps = {
    addToList: jest.fn(),
    name: "mahdi",
    completed:true
  };
  
  test(` Test whether the addToList function has been called after the li has been clicked.`, () => {
    const { getByTestId } = render(<ListItem {...testProps} />);
    const button = getByTestId("list-item");
    fireEvent.click(button);
    expect(testProps.addToList).toHaveBeenCalled();
  });

  test(`The innerText of the li element is the same as the value of the name prop`, () => {
    const { getByTestId } = render(<ListItem {...testProps} />);
    const item = getByTestId("list-item");
    expect(item).toHaveTextContent("mahdi");
  });
  