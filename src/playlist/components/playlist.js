import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './media.js'
import './playlist.css'

/*
  Componente Funcional: Es una función la cual solo retorna el JSX de nuestro componente (renderiza UI),
  es mas sencillo, mas fácil de probar y este componente no tiene ciclo de vida.
*/

// // Componente Funcional
// function Playlist(props){
//     const playlist = props.data.categories[0].playlist
//     console.log(props.data);
//     return (
//       <div className="Playlist">
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     )
// }

class Playlist extends Component {

  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
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