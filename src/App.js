import React from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './Video'



function App() {

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
      type: 'video/mp4'
    }]
  }

  return (
    <div className="App">

      <Video {...videoJsOptions}/>

    </div>
  );
}

export default App;
