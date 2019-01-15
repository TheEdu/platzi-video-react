import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {

  // constructor(props){
  //   super(props)
  //   // EMCS6 - State maganer
  //   this.state = {
  //       author: props.author
  //   }
  //   // EMCS6 - Function binding
  //   this.handleClick = this.handleClick.bind(this)
  // }
  
  // // EMCS6 - Function binding
  // handleClick(event) {
  //   console.log(this.props.title)
  // }

  // EMCS7 - State maganer
  state = {
    author: 'Ivan Robles'
  }

  // EMCS7 - Function binding
  handleClick = (event) => {
    console.log(this.props.title)

    this.setState({
        author: 'Emmanuel Alonso'
    })
  }

  render() {

    const styles = {
      container: {
        border: '1px solid black',
        boxShadow: '0 0 10px rgba(0,0,0,.3)'
      }
    }

    const { title, image } = this.props;
    const { author } = this.state;

    return (
      <div className="Media" style={styles.container} onClick={this.handleClick}>
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