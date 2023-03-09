import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/cam-on");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Gửi liên hệ
      </button>
    </div>
  );
};

export default Contact;
