import React, { Component } from "react";
import { withContext } from "../StateProvider/withContext";
import "./Player.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export class Player extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.timerRef = React.createRef();

    this.state = {
      duration: 0,
      //isPlaying: false,
    };

    this.isSeeking = false;
    this.currentTime = 0;
  }

  componentDidUpdate = (prevProps) => {
    const { song, isPlaying } = this.props.context.data;
    const { song: prevSong } = prevProps.context.data;

    if (Object.keys(song).length > 0) {
      if (JSON.stringify(song) !== JSON.stringify(prevSong)) {
        this.handlePlay();
      }
    }
  };

  getTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  handleLoadedData = () => {
    //Khi nào audio được load
    console.log("loaded audio");
    const duration = this.audioRef.current.duration;
    this.setState({ duration });
  };

  handleSeek = (e) => {
    this.isSeeking = true;

    const rate = e.target.value; //Tỉ lệ % của input range
    //=> Tính chuyển đổi từ phần trăm => currentTime (Số giây)
    //=> Công thức: rate = currentTime / duration * 100
    //=> currentTime = rate * (duration / 100)

    this.currentTime = (rate * this.state.duration) / 100;

    const currentTimeNode =
      this.timerRef.current.parentElement.previousElementSibling;

    currentTimeNode.innerText = this.getTime(this.currentTime);
  };

  handleMouseUp = () => {
    console.log("up");
    this.isSeeking = false;
    this.audioRef.current.currentTime = this.currentTime;
  };

  handlePlay = () => {
    let status = this.state.isPlaying;

    if (this.audioRef.current.paused) {
      this.audioRef.current.play();
      status = true;
    } else {
      this.audioRef.current.pause();
      status = false;
    }

    const { setIsPlaying } = this.props.context.dispatch;

    setIsPlaying(status);
  };

  handleTimeUpdate = () => {
    const currentTime = this.audioRef.current.currentTime;
    const currentTimeNode =
      this.timerRef.current.parentElement.previousElementSibling;

    currentTimeNode.innerText = this.getTime(currentTime);

    //Chuyển đổi currentTime => tỉ lệ phần trăm
    const rate = (currentTime / this.state.duration) * 100;

    if (!this.isSeeking) {
      this.timerRef.current.value = rate;
    }

    //console.log(this.isSeeking);
  };

  handleEnded = () => {
    console.log("ended");
    this.audioRef.current.currentTime = 0;
    const { setIsPlaying } = this.props.context.dispatch;
    setIsPlaying(false);
  };

  render() {
    console.log("re-render");
    let { duration } = this.state;
    const { context } = this.props;
    const { isPlaying, song } = context.data;

    return (
      <div className="player">
        <div className="player__image">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg"
            alt=""
            className={isPlaying ? "playing" : ""}
          />
        </div>
        <div className="player__inner">
          <div className="row">
            <div className="col-8">
              <div className="player__inner--action">
                <span onClick={this.handlePlay}>
                  {isPlaying ? (
                    <i className="fa-solid fa-pause"></i>
                  ) : (
                    <i className="fa-solid fa-play"></i>
                  )}
                </span>
              </div>
              <div className="player__inner--timer d-flex align-items-end">
                <span> 00:00 </span>
                <div className="mx-2 d-flex align-items-end">
                  <input
                    type="range"
                    className="form-range"
                    defaultValue={0}
                    onChange={this.handleSeek}
                    ref={this.timerRef}
                    step={0.01}
                    onMouseUp={this.handleMouseUp}
                  />
                </div>
                <span>{this.getTime(duration)}</span>
              </div>
            </div>
            <div className="col-4 d-flex align-items-end">
              <div className="player__inner--volume d-flex">
                <span> </span>
                <input
                  type="range"
                  className="form-range mx-2"
                  defaultValue={100}
                />
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
        <audio
          ref={this.audioRef}
          src={song.source}
          onLoadedData={this.handleLoadedData}
          onTimeUpdate={this.handleTimeUpdate}
          onEnded={this.handleEnded}
        ></audio>
      </div>
    );
  }
}

export default withContext(Player);
