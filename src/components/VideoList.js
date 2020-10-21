import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.selectVideo}
      />
    );
  });
  return (
    <section id="sidebar">
      <section id="intro">
        <a href="#" class="logo">
          <img src="images/logo.jpg" alt="" />
        </a>
        <header>
          <h2>Search videos</h2>
        </header>
      </section>

      <section>
        <ul class="posts">{renderedList}</ul>
      </section>

      <section class="blurb">
        <h2>About</h2>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor
          magna enim, ac accumsan tortor cursus at phasellus sed ultricies.
        </p>
        <ul class="actions">
          <li>
            <a href="#" class="button">
              Learn More
            </a>
          </li>
        </ul>
      </section>

      <section id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-github">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram">
              <span class="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-rss">
              <span class="label">RSS</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
        <p class="copyright">
          &copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.
          Images: <a href="http://unsplash.com">Unsplash</a>.
        </p>
      </section>
    </section>
  );
};

export default VideoList;
