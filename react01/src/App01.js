import React from "react";
import "./Styles.css";

function App() {
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h1",
  //     {
  //       id: "title",
  //       className: "title",
  //       onClick: (e) => {
  //         e.target.style.color = "red";
  //       },
  //     },
  //     "Unicode"
  //   ),

  //   React.createElement(
  //     "h1",
  //     {
  //       id: "sub-title",
  //       className: "sub-title",
  //       onClick: (e) => {
  //         e.target.style.color = "red";
  //       },
  //     },
  //     "Khóa học React JS"
  //   ),

  //   React.createElement(
  //     "h1",
  //     {
  //       id: "sub-title",
  //       className: "sub-title",
  //       onClick: (e) => {
  //         e.target.style.color = "red";
  //       },
  //     },
  //     "Khóa học React JS"
  //   )
  // );

  const title = (
    <>
      <h2>Khóa học React JS</h2>
      <h2>Khóa học React JS</h2>
    </>
  );

  const company = "<b><i>Unicode</i></b>";

  // const handleClick = (e) => {
  //   console.log(e);
  //   alert("Clicked");
  // };

  const handleClickWithParams = (title) => {
    alert(title);
  };

  // const handleClickNoPrams = (e) => {
  //   handleClickWithParams(e.target.innerText);
  // };

  const check = true;

  let courseName;

  if (check) {
    courseName = <h1>Khóa học React JS</h1>;
  } else {
    courseName = <h1>Khóa học frontend</h1>;
  }

  return (
    <>
      <h1
        dangerouslySetInnerHTML={{
          __html: company,
        }}
      ></h1>
      {check ? (
        <h1
          style={{
            color: "red",
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          Unicode
        </h1>
      ) : (
        <h2
          style={{
            color: "red",
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          Tech2
        </h2>
      )}
      {title}
      <button
        onClick={(e) => {
          handleClickWithParams(e.target.innerText);
        }}
      >
        Click Me
      </button>
      <div className="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum at aperiam
        corrupti, magni alias nemo consectetur quis aut perspiciatis fuga dolore
        perferendis ab doloremque assumenda dolorum nam voluptate ipsa ipsam.
      </div>
      <input defaultValue="An" />
      {courseName}
    </>
  );
}

export default App;
