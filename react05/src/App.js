import Player from "./Player/Player";
import Playlist from "./Playlist/Playlist";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Playlist nghe nhạc</h2>
      <hr />
      <div className="row">
        <div className="col-6">
          <Player />
        </div>
        <div className="col-6">
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
