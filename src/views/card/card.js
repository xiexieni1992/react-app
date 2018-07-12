import React, { Component } from 'react'
import { Footer } from '../../components/common'
import './index.css'

class Home extends Component {
  state = {
    value: '首页',
  }

  handleNameChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleExpand = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <div id='homePage'>
        <div className='pa20 ta-c main'>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
