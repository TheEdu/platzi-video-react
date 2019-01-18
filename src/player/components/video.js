import React, { Component } from 'react'
import './video.css'


class Video extends Component {
  togglePLay() {
    if (this.props.play) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.play != this.props.play) {
      this.togglePLay()
    }
  }

  setRef = element => {
    this.video = element
  }

  render() {
    return (
      <div className="Video">
        <video
          controls
          muted={this.props.muted}
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          ref={this.setRef}
        />
      </div>
    )
  }
}

export default Video;