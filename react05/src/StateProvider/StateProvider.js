import React from "react";
export const StateContext = React.createContext();

export default class StateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {},
      isPlaying: false,
    };
    this.dispatch = {
      setSong: this.setSong,
      setIsPlaying: this.setIsPlaying,
    };
  }

  setSong = (song) => {
    this.setState({ song });
  };

  setIsPlaying = (isPlaying) => {
    this.setState({ isPlaying });
  };

  render() {
    const { children } = this.props;

    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}
