import React from 'react'
import ReactDom from 'react-dom'
import Media from './src/playlist/components/media';
import Playlist from './src/playlist/components/playlist';
import data from './src/api/categories.json'


// console.log('Hola mundo!')
//const template = <h1>Hola Mundo!</h1>
const app = document.getElementById('app')
// const mediaTemp = < 
//                     Media 
//                     title  = "¿Qué es responsive Design?"
//                     author = "Eduardo Denis"
//                     image  = "./../../../images/covers/bitcoin.jpg"
//                     type  = "audio"
//                   />
// ReactDom.render(mediaTemp, app)

const playlistTemp = <
                      Playlist 
                      data = {data}
                    />


ReactDom.render(playlistTemp, app)

