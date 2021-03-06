import React from "react";
import "./Playlists.scss";
import "./data";
import Playlist from "../../components/Playlist/Playlist";
import { PlaylistData } from "./data";
const Playlists = () => {
  return (
    <div className="playlists">
      <div className="title">
        <h1>Grandes playlists pra melhorar seu dia!</h1>
      </div>
      <div className="content">
        {PlaylistData.map((playlist, index) => {
          return (
            <Playlist
              id={playlist.id}
              cover={playlist.cover}
              key={index}
              alt={playlist.title}
            ></Playlist>
          );
        })}
      </div>
    </div>
  );
};

export default Playlists;
