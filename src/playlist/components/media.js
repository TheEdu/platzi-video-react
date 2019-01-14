import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
  render() {
    const styles = {
      container: {
        border: '1px solid black',
        boxShadow: '0 0 10px rgba(0,0,0,.3)'
      }
    }

    const { title, author, image } = this.props;

    return (
      <div className="Media" style={styles.container}>
        <div className="Media-cover">
          <img
            src = {image}
            alt = ""
            className = "Media-image "
          />
          <h3 className="Media-title">{title}</h3>
          <p  className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;