import React, { useRef, useState } from "react";
import "./Video.css";
import meal from "../Video/meal.mp4";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
const Video = () => {
  const [playing, setPlaying] = useState(false);
  const vidRef = useRef();
  return (
    <div className="app-video">
      <div className="app-video-overlay">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
        />
        <div
          className="app-video-flex"
          onClick={() => {
            setPlaying(!playing);
            if (playing) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playing ? (
            <BsFillPauseFill fontSize={"40px"} color="#fff" />
          ) : (
            <BsFillPlayFill fontSize={"40px"} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
