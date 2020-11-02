import { useState, useEffect } from "react";

function checkLocalStorage(initialState, key) {
  const existingState = localStorage.getItem(key);
  return existingState ? JSON.parse(existingState) : initialState;
}

function usePersistentState(initialState, key = "defaultKey") {
  const [state, setState] = useState(() =>
    checkLocalStorage(initialState, key)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistentState;
