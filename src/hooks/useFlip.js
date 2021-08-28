import { useState } from "react";

const useFlip = initialState => {
  const [state, updateState] = useState(initialState);
  const toggleState = () => {
    updateState(!state);
  };
  return [state, toggleState];
};

export default useFlip;
