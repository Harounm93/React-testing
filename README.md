# React Testing Workshop

## Overview

- Use the react testing library to test each of the components in the shopping list app.
- Test that the functions handed down as props can be clicked.
- Test that list items display when they are passed down as props.
- Test that list items are ticked or unticked according to their 'completed' boolean.

### Task 1

The `<ClearList />` component takes in a `clearList` function as and `buttonText` string as props.

- Test whether the `clearList` function has been called after the button has been clicked.

- Test that the inner text of the `<button>` element is the value of the `buttonText` prop.

### Task 2

The `<InputList />` component takes in a `addToList` function as and `buttonText` string as props.

- Test whether the `addToList` function has been called after the button has been clicked.

- Test that the inner text of the `<button>` element is the value of the `buttonText` prop.

### Task 3

The `<ListItem />` component takes in `name` (string), `completed` (boolean) and `tickItem` (function) as props.

- Test that the inner text of the `<li>` element is the value of the `name` prop.

- Test that the class of the `<li>` element is 'tickedItem' if the `completed` boolean is false, or 'untickedItem' if it is true.

- Test whether the `addToList` function has been called after the `<li>` has been clicked.

### Task 4

The `<ShowList />` component takes in `list` (array) and `tickItem` (function) as props.

- Test that `<ol>` element contains the correct number of 'list-item' components.

### Task 5 - BONUS

Research and use 'jest-axe' to test the app for accesibility: https://www.npmjs.com/package/jest-axe
