import React, { useEffect, useRef, useState } from "react";
import Media from "./Media";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Video = () => {
  console.log("re-render");
  const videoRef = useRef();
  const btnRef = useRef();

  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    if (videoRef.current.isPaused()) {
      videoRef.current.chay();
      //videoRef.current.remove();
    } else {
      videoRef.current.dung();
    }

    setIsPlay(!isPlay);
  };

  useEffect(() => {
    //console.log(videoRef.current.duration);
    console.log(btnRef);
    btnRef.current.classList.remove("btn-primary");
    btnRef.current.classList.add("btn-danger");
  }, []);

  return (
    <div>
      <Media ref={videoRef} />
      {/* <p>{videoRef.current.duration}</p> */}
      <button type="button" onClick={handlePlay}>
        {isPlay ? "Pause" : "Play"}
      </button>
      <Button
        variant="primary"
        ref={btnRef}
        onClick={(e) => {
          e.target.classList.add("abc");
          //console.log(e.target.classList.add("abc"));
        }}
      >
        Test Btn
      </Button>
    </div>
  );
};

export default Video;
