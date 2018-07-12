import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

require('./mock/mock.js')

const app = document.getElementById('root')

ReactDOM.render(
  <App />
  , app
)
