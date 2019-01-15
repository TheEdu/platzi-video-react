import React from 'react'
import ReactDom from 'react-dom'
import Media from './../playlist/components/media';
import Playlist from './../playlist/components/playlist';
import data from './../api/categories.json'
import Home from './../pages/containers/home';

// console.log('Hola mundo!')
const app = document.getElementById('app')
const homeTemplate = <Home />

ReactDom.render(homeTemplate, app)

// const mediaTemp = < 
//                     Media 
//                     title  = "¿Qué es responsive Design?"
//                     author = "Eduardo Denis"
//                     image  = "./../../../images/covers/bitcoin.jpg"
//                     type  = "audio"
//                   />
// ReactDom.render(mediaTemp, app)

// const playlistTemp = <
//                       Playlist 
//                       data = {data}
//                     />
// ReactDom.render(playlistTemp, app)

