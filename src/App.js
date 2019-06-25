import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Video from "./Video";

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // sources: [{
    //   src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
    //   type: 'video/mp4'
    // }]

  };
  const playlist = [
    {
      sources: [
        {
          src: "http://techslides.com/demos/sample-videos/small.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://techslides.com/demos/sample-videos/small.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/movie.mp4",
          type: "video/mp4"
        }
      ]
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4"
        }
      ]
    }
  ];

  return (
    <div className="App">
      <Video playlist={playlist} {...videoJsOptions} />
    </div>
  );
}

export default App;
