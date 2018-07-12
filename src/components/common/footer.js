import React, { Component } from 'react'
import footerMenu from '../../config/footer'
import NavLink from './navLink'


// const MenuItem = ({ onClick, children }) => {
//   return (<li className='flex1 ta-c' onClick={onClick}>
//     {children}
//   </li>)
// }

class FooterTemplate extends Component {
  constructor(props) {
    super()
    this.state = {
      activeMenu: 'home',
      actvieIcon: ''
    }
  }
  changeIcon = (item) => {
    console.log(item)
  }

  render() {
    // const { activeMenu }
    return (
      <ul className='flex l-center pf footer-tmp'>
        {footerMenu.menu.map((item, index) => {
          return <li className='flex1 ta-c' key={item.text} onClick={this.changeIcon.bind(this, item)}>
            <NavLink
              to={item.route}
            ><img src={item.defaultIcon} alt='' />
            </NavLink>
          </li>
        })}
      </ul>
    )
  }
}

export default FooterTemplate
