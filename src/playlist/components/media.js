import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

/*
  PureComponent: tiene el método shouldComponentUpdate ya asignado (por defecto),
  si a este componente no se le actualizan las propiedades,
  no tenemos que validar a mano con shouldComponentUpdate,
  PureComponent lo hace por nosotros, es decir;
  si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.
*/

class Media extends PureComponent {

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
    author: this.props.author
  }

  // EMCS7 - Function binding
  handleClick = (event) => {
    console.log(this.props.title)

    this.setState({
        author: 'handleClick'
    })
  }

  render() {

    const styles = {
      container: {
        border: '1px solid black',
        boxShadow: '0 0 10px rgba(0,0,0,.3)'
      }
    }

    const { title, cover } = this.props;
    const { author } = this.state;

    return (
      <div className="Media" style={styles.container} onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src = {cover}
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
  cover: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;