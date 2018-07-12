import React, { Component } from 'react'
import { Footer, Header } from '../../components/common'

class Find extends Component {
  // static propTypes = {
  //   // model: React.PropTypes.object.isRequired,
  //   title: React.PropTypes.string
  // }
  // static defaultProps = {
  //   model: {
  //     id: 0
  //   },
  //   title: '测试'
  // }
  state = {
    value: '发现'
  }

  handleNameChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleExpand = (e) => {
    e.preventDefault()
    console.log(323)
    // this.setState(prevState => ({ expanded: !prevState.expanded }))
  }
  render() {
    // const {
    //   title
    // } = this.props
    const { value } = this.state
    return (
      <div className='findPage'>
        <Header title={value} />
        <div className='pa20 ta-c' style={{ marginTop: '50px' }}>发现</div>
        <Footer />
      </div>
    )
  }
}

export default Find
