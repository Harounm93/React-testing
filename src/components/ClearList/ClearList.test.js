import React from "react"
import {render, fireEvent} from "@testing-library/react"
import ClearList from "./index"

const testProps = {
    clearList:jest.fn(),
    
}

test(`The clearList function should be called after the button has been clicked`, ()=>{
const{getByTestId} = render(<ClearList {...testProps} />)
const button = getByTestId("clearListFunction");
fireEvent.click(button)
expect(testProps.clearList).toHaveBeenCalled();
});
