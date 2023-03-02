import React from "react";
export const preventRender = (ParentComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    shouldComponentUpdate = (nextProps) => {
      const nextPropsJson = JSON.stringify(nextProps);
      const currentPropsJson = JSON.stringify(this.props);

      if (nextPropsJson.trim() !== currentPropsJson.trim()) {
        return true;
      }

      return false;
    };

    render() {
      return <ParentComponent {...this.props} />;
    }
  };
};
