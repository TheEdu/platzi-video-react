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

  componentDidMount() {
    this.setState({
      play: !this.props.autoPlay
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
          autoPlay={this.props.autoPlay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          play={this.state.play}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;