import React, { useState, useEffect, useLayoutEffect } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 6) {
      setCount(0);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
};

export default Counter2;

/*
useEffect 

1. User tương tác với App. VD: Click vào một button
2. State của component sẽ thay đổi
3. DOM sẽ thay đổi
4. UI được thay đổi trên màn hình
5. Hàm cleanup sẽ được gọi để clean những effect đã render trước đó nếu đối số thứ 2 của useEffect thay đổi.
6. useEffect hook sẽ được gọi

useLayoutEffect
1. User tương tác với App. VD: Click vào một button
2. State của component sẽ thay đổi
3. DOM sẽ thay đổi
4. Hàm cleanup sẽ được gọi để clean những effect đã render trước đó nếu đối số thứ 2 của useEffect thay đổi.
5. useLayoutEffect hook sẽ được gọi
6. UI được thay đổi trên màn hình

UI = User Interface
*/
