import React, { useContext } from "react";

import { MyContext } from "./ComponentA";

import { withContext } from "./withContext";

const ComponentC = (props) => {
  //const context = useContext(MyContext)

  const { name } = props.context;

  return (
    <div>
      <h2>Component C: {name}</h2>
    </div>
  );
};

export default withContext(ComponentC);
