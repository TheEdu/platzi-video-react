import React, { Component } from 'react'
import VideoPlayerLayout from './../components/video-player-layout'
import Video from './../components/video'
import Title from './../components/title'
import PlayPause from './../components/play-pause'
import Timer from './../components/timer'
import VideoPlayerControls from './../components/video-player-controls'
import formattedTime from './../../libs/time'
import ProgressBar from './../components/progress-bar'
import Spinner from '../components/spinner';

class VideoPlayer extends Component {

  state = {
    play: false,
    duration: 0,
    currentTime: 0,
    loading: false
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

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <Title 
          title="Esto es un Video Chido!"
        />
        <VideoPlayerControls>
          <PlayPause
            play={this.state.play}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          muted={true}
          autoPlay={this.props.autoPlay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          play={this.state.play}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;