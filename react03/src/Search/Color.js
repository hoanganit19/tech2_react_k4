import React from "react";

export const Color = (ParentComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    getRandomColor = () => {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    render() {
      const color = this.getRandomColor();
      return (
        <div style={{ background: color }}>
          <ParentComponent {...this.props} />
        </div>
      );
    }
  };
};
