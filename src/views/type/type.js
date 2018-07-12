import React, { Component } from 'react'
import Brand from './compontent/brand'
import Model from './compontent/model'
import { Footer } from '../../components/common'
import './index.css'

class Home extends Component {
  state = {
    value: '型号选择',
  }

  handleNameChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleExpand = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div id='typePage'>
        <div className='content flex'>
          <Brand />
          <Model />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
