import React from "react";

const VideoDetail = (props) => {
  console.log(props);
  if (!props.video) {
    return <div className="ui active inverted dimmer"></div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  const temp = `<iframe width="560" height="615" src="https://www.youtube.com/embed/3qiLI1ILMlU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <a href="#">{props.video.snippet.title}</a>
          </h2>
          <p>
            <b>{props.video.snippet.description}</b>
          </p>
        </div>
      </header>

      {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ? (
        <iframe
          title="video player"
          className="image featured"
          src={videoSrc}
        />
      ) : (
        <iframe
          width="560"
          height="615"
          title="video player"
          className="image featured"
          src={videoSrc}
        />
      )}

      <p>{props.video.snippet.description}</p>
    </article>
  );
};

export default VideoDetail;
