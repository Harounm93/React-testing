/* This component will contain a button that clears all of the list items which the person has previously entered.*/

import React from "react";
import "./ClearList.css";

function ClearList({ clearList }) {
  return (
    <section>
      <button className="ClearList" onClick={() => clearList()}>
        Clear List
      </button>
    </section>
  );
}

export default ClearList;
