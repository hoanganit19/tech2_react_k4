import React, { Component } from "react";
import { withContext } from "../StateProvider/withContext";
import "./Playlist.scss";

const playlist = [
  {
    id: 1,
    title: "Yêu vội vàng Remix",
    duration: "04:19",
    source: "/mp3/yeu-voi-vang-remix.mp3",
  },

  {
    id: 2,
    title: "Ai chung tình được mãi",
    duration: "05:19",
    source: "/mp3/ai-chung-tinh-duoc-mai.mp3",
  },
];

export class Playlist extends Component {
  constructor(props) {
    super(props);
  }

  handleClickSong = (song) => {
    const { song: currentSong } = this.props.context.data;
    if (song.id != currentSong.id) {
      const { setSong, setIsPlaying } = this.props.context.dispatch;
      setSong(song);
      setIsPlaying(false);
    }
  };

  render() {
    const { song: currentSong, isPlaying } = this.props.context.data;
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="5%">STT</th>
              <th>Tên</th>
              <th width="20%">Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td
                    onClick={() => {
                      this.handleClickSong(item);
                    }}
                  >
                    {item.title}{" "}
                    {currentSong.id == item.id && isPlaying ? "Playing..." : ""}
                  </td>
                  <td>{item.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withContext(Playlist);
