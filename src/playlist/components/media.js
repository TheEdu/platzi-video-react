import React, { Component } from 'react'
import './media.css'

class Media extends Component {
  render() {
    const styles = {
      container: {
        border: '1px solid black',
        boxShadow: '0 0 10px rgba(0,0,0,.3)'
      }
    }

    return (
      <div className="Media" style={styles.container}>
        <div className="Media-cover">
          <img
            className="Media-image "
            src="./../../../images/covers/bitcoin.jpg"
            alt=""
            width={260}
            height={160}
          />
          <h3 className="Media-title">¿Por qué aprender React?...</h3>
          <p  className="Media-author">Eduardo Denis</p>
        </div>
      </div>
    )
  }
}

export default Media;