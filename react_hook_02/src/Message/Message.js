import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { setMessage } from "../StateProvider/Actions/messageActions";

const Message = () => {
  const { data, dispatch } = useContext(StateContext);

  //console.log(dispatch);

  const handleSetMessage = () => {
    dispatch(setMessage("Unicode Academy 02"));
  };

  return (
    <div>
      <h1>{data.msg}</h1>
      <button type="button" onClick={handleSetMessage}>
        Set Message
      </button>
    </div>
  );
};

export default Message;
