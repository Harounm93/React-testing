/* This component will contain: 
1. An input field which allows the user to write what they want to be on their shoping list.
2. A button which, when pressed, adds the text which they have written to their shopping list. */

import React from "react";

import usePersistentState from "../../libs/usePersistentState.js";

import "./InputList.css";

function InputList({ addToList }) {
  const [input, setInput] = usePersistentState("", "input"); // Here is where the input field is tracked for list adding goodness.

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }
  return (
    <section>
      <input value={input} onChange={handleInput}></input>
      <button className="InputList" onClick={() => addToList(input)}>
        Add Item
      </button>
    </section>
  );
}

export default InputList;
