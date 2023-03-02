import React from "react";
import ComponentB from "./ComponentB";

//Tạo context
export const MyContext = React.createContext();

const ComponentA = () => {
  return (
    <div>
      <h2>Compoent A</h2>
      <MyContext.Provider value={{ name: "Hoàng An" }}>
        <ComponentB />
      </MyContext.Provider>
    </div>
  );
};

export default ComponentA;
