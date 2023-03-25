import React, { useState } from "react";

const useColor = () => {
  const [state, setState] = useState("");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return { color: "#" + randomColor };
};

export default useColor;
