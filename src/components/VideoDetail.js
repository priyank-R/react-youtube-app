import React from "react";

const VideoDetail = (props) => {
  console.log(props);
  if (!props.video) {
    return <div class="ui active inverted dimmer"></div>;
  }
  const videoSrc= `https://www.youtube.com/embed/${props.video.id.videoId}`
  return (
      <div className="video-detail">
      <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
      </div>
    <div className="ui segment">
      <h4 className="ui header">{props.video.snippet.title}</h4>
      <p>{props.video.snippet.description}</p>
    </div>
    </div>
  );
};

export default VideoDetail;
