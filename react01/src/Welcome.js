export const Welcome = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      {
        id: "title",
        className: "title",
        onClick: (e) => {
          e.target.style.color = "red";
        },
      },
      "Unicode"
    ),

    React.createElement(
      "h1",
      {
        id: "sub-title",
        className: "sub-title",
        onClick: (e) => {
          e.target.style.color = "red";
        },
      },
      "Khóa học React JS"
    ),

    React.createElement(
      "h1",
      {
        id: "sub-title",
        className: "sub-title",
        onClick: (e) => {
          e.target.style.color = "red";
        },
      },
      "Khóa học React JS"
    )
  );
};
