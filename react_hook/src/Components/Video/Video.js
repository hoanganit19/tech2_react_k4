import React, { useEffect, useRef, useState } from "react";
import Media from "./Media";

const Video = () => {
  console.log("re-render");
  const videoRef = useRef();

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
    console.log(videoRef.current.duration);
  }, []);

  return (
    <div>
      <Media ref={videoRef} />
      <p>{videoRef.current.duration}</p>
      <button type="button" onClick={handlePlay}>
        {isPlay ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Video;
