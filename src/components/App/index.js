import React, { useState } from 'react';
import './App.css';

import InputList from '../InputList';
import ShowList from '../ShowList';
import ClearList from '../ClearList';

/* 1. App will contain components which will allow a person to input items into a list, show the items that are in the list, 
and clear all of the items in a list. 
2. In order for the components to interact with one another, some functionality will need to be hoisted into the App component
 */

let shoppingList = [
  { name: 'Oranges', completed: false },
  { name: 'Tea', completed: false },
  { name: 'Aubergine', completed: false },
  { name: 'Biscuits', completed: false },
  { name: 'Dishwasher Tablets', Completed: false },
];

function App() {
  const [list, setList] = useState(shoppingList);

  function addToList(newListItem) {
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listObject = { name: newListItem, completed: false };
    const updatedList = [...list, listObject];
    setList(updatedList);
  }

  function clearList() {
    //This function clears all the items that have been added to the list.
    const clearedList = [];
    setList(clearedList);
  }

  function tickItem(index) {
    const updatedItem = {
      name: list[index].name,
      completed: !list[index].completed,
    };

    const updatedList = [
      ...list.slice(0, index),
      updatedItem,
      ...list.slice(index + 1),
    ];

    setList(updatedList);
  }

  return (
    <section>
      <InputList addToList={addToList} />
      <ShowList list={list} tickItem={tickItem} />
      <ClearList clearList={clearList} />
    </section>
  );
}

export default App;
