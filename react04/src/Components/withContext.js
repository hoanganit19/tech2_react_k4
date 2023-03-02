import React from "react";
import { MyContext } from "./ComponentA";

export const withContext = (ParentComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <MyContext.Consumer>
          {(context) => <ParentComponent {...this.props} context={context} />}
        </MyContext.Consumer>
      );
    }
  };
};
