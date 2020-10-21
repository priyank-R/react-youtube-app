import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <li onClick={() => onVideoSelect(video)}>
      <article>
        <header>
          <h3>
            <a href="#" onClick={()=>onVideoSelect(video)}>{video.snippet.title}</a>
          </h3>
          <time className="published" dateTime="2015-10-20">
            {(video.snippet.publishedAt).substring(0,10)}
          </time>
        </header>
        <a href="#" className="image">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </a>
      </article>
    </li>
  );
};

export default VideoItem;
