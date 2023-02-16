import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { Welcome } from "./components/Welcome";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector(".web-root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const h1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     onClick: (e) => {
//       e.target.style.color = "red";
//     },
//   },
//   "Unicode"
// );

// const h2 = document.createElement("h2");
// console.log(h2);
//<h2></h2>

// console.log(h1);

// root.render(<Welcome />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
