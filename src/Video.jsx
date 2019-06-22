import React from "react";
import videojs from "video.js";
import videojsPlaylistPlugin from "videojs-playlist";

import "video.js/dist/video-js.css";
require("videojs-contrib-ads");

// let ima = require("videojs-ima/dist/videojs.ima");
// console.log("ima", ima);
// videojs.registerPlugin(ima.name, ima.init);

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    // instantiate Video.js
    // videojs.registerPlugin("playlist", videojsPlaylistPlugin);

    const imaOptions = {
      id: "content_video",
      adTagUrl:
        "https://rtbapi.campsiteproject.com/vast/2.0/loop?apiKey=91IYCBRb47serD7iBm6yYIRoxZXRai0hw2WVEhz4mCF09KPnH4gLFJ6SDwAiUivfngNi0pkL8F46lRji16LY1PWkMdzOqlO4HYvF&player%5Bid%5D=test-player&player%5Benvironment%5D=doctors-offices&loop%5BminDuration%5D=0&loop%5BmaxDuration%5D=60&loop%5BdwellTime%5D=20"
    };

    let ima = require("videojs-ima/dist/videojs.ima");
    videojs.registerPlugin(ima.name, ima.init);

    this.player = videojs(this.videoNode, this.props, () => {
      console.log("onPlayerReady this", this);

      console.log(this.player);

      this.player.on("ended", this.handleVideoEnded);
      this.player.on("duringplaylistchange", this.handleDuringplaylistchange);
      this.player.on("playlistchange", this.handlePlaylistchange);
      this.player.on("beforeplaylistitem", this.handleBeforeplaylistitem);
      this.player.on("playlistitem", this.handlePlaylistitem);
      this.player.ima(imaOptions);
    });

    this.player.playlist(this.props.playlist);
    // this.player.playlist.first();
    this.player.playlist.autoadvance(0);
  }

  handleDuringplaylistchange = event => {
    console.log("handleDuringplaylistchange", event);
  };

  handlePlaylistchange = event => {
    console.log("handlePlaylistchange", event);
  };

  handleBeforeplaylistitem = event => {
    console.log("handleBeforeplaylistitem", event);
  };

  handlePlaylistitem = event => {
    console.log("handlePlaylistitem", event);
  };

  handleVideoEnded = event => {
    console.log("handleVideoEnded", event);
  };

  handleVideoEnded = event => {
    console.log("handleVideoEnded", event);
  };

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
