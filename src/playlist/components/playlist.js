import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './media.js'
import './playlist.css'
import Play from './../../icons/components/play'
import Pause from './../../icons/components/pause'
import Volume from './../../icons/components/volume'
import FullScreen from './../../icons/components/full-screen'

class Playlist extends Component {

  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
        < 
          Play 
          size={30}
          color="red"
        />
        < 
          Pause 
          size={30}
          color="blue"
        />
        < 
          Volume 
          size={30}
          color="green"
        />
        < 
          FullScreen 
          size={30}
          color="yellow"
        />
        {
          playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}

Playlist.propTypes = {
  data: PropTypes.object.isRequired
}


export default Playlist;