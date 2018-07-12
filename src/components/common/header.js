import React, { Component } from 'react'

class HeaderTemplate extends Component {
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
  bakcHandle = (e) => {
    console.log(e.target)
  }

  render() {
    const { title } = this.props
    return (
      <ul className='red flex l-center pf header-tmp'>
        <li className=' ta-c' onClick={this.bakcHandle}>
          <i className='icon icon-small-left' />返回
        </li>
        <li className='flex1 ta-c'>
          {title}
        </li>
        <li className=' ta-c' >
          <i className='icon iconfont-search mr5' />搜索
        </li>
      </ul >
    )
  }
}

export default HeaderTemplate

