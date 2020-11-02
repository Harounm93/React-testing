//This is the component which shows each individual list item.

import React from "react";
import "./ListItem.css";

function ListItem({ name, completed, tickItem }) {
  return (
    <section className="listItem">
      <li
        className={completed ? "tickedItem" : "untickedItem"}
        onClick={tickItem}
      >
        {name}
      </li>
    </section>
  );
}

export default ListItem;
