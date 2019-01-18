import React, { Component } from 'react'
import './video.css'


class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video
          controls
          muted={this.props.muted}
          autoPlay={this.props.autoPlay}
          src={this.props.src}
        />
      </div>
    )
  }
}

export default Video;