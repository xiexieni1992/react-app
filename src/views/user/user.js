import React, { Component } from 'react'
import { Footer, Header } from '../../components/common'

class User extends Component {
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
    value: '个人中心'
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
      <div className='userPage'>
        <Header title={value} />
        <div className='pa20 ta-c' style={{ marginTop: '50px' }}>个人中心</div>
        <Footer />
      </div>
    )
  }
}

export default User
