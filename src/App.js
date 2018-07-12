import React from 'react'
import { findBrands } from './api/phoneModel'
import Route from './router/router'
import './assets/style/common.css'
import './assets/fonts/icon.css'

console.log('Route', Route)

class App extends React.Component {
  render() {
    findBrands().then((res) => {
      console.log(res)
    })
    return (
      <Route />
    )
  }
}

export default App
