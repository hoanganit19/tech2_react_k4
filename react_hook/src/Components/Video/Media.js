import React, { forwardRef, useImperativeHandle, useRef } from "react";
import video from "./video.mp4";
const Media = ({}, ref) => {
  const videoRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      chay: () => {
        videoRef.current.play();
      },
      dung: () => {
        videoRef.current.pause();
      },
      isPaused: () => {
        return videoRef.current.paused;
      },
      duration: videoRef.current.duration,
    };
  });

  return <video ref={videoRef} src={video} width="100%" />;
};

export default forwardRef(Media);
