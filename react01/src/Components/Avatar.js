import React from "react";
import PropTypes from "prop-types";

const Avatar = (props) => {
  //props.src = "a"; //=> Lỗi
  //console.log(alt);
  return (
    <div className="member__avatar">
      <img {...props} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
