import React, { Component } from 'react'
import { Footer } from '../../components/common'
import Carousel from './compontent/swiper'
import './index.less'

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
    console.log(process.env)
    return (
      <div id='homePage'>
        <div className='pa20 ta-c main'>
          <Carousel />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
