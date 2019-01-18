import React, { Component } from 'react'
import VideoPlayerLayout from './../components/video-player-layout'
import Video from './../components/video'
import Title from './../components/title'
import PlayPause from './../components/play-pause'

class VideoPlayer extends Component {

  state = {
    play: false,
  }

  togglePlay = (event) => {
    this.setState({
      play: !this.state.play
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Esto es un Video Chido!"
        />
        <PlayPause
          play={this.state.play}
          handleClick={this.togglePlay}
        />
        <Video
          muted={true}
          autoPlay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;