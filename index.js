import React from 'react'
import ReactDom from 'react-dom'
import Media from './src/playlist/components/media';

// console.log('Hola mundo!')
//const template = <h1>Hola Mundo!</h1>
const app = document.getElementById('app')
ReactDom.render(<Media/>, app)

