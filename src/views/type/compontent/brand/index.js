import React, { Component } from 'react'
import BScroll from 'better-scroll';
import classNames from 'classnames'
import { findBrands } from '../../../../api/phoneModel'
import './index.css'

let bscroll = null;

class brand extends Component {
  state = {
    brandData: [],
    activeId: 1
  }
  componentWillMount() {
    findBrands().then((res) => {
      if (res.code === 'SUCCESS') {
        this.setState({ brandData: res.data.records })
      }
    })
  }
  componentDidMount() {
    this.initBscroll()
  }

  initBscroll() {
    bscroll = new BScroll(this.refs.brandWrapper, {
      click: true,
      bounce: false
    })
  }
  changeBrand(item, index) {
    const brandList = document.querySelectorAll('.menu-item');
    const el = brandList[index];
    bscroll.scrollToElement(el, 300);
    this.setState({ activeId: item.id })
  }

  render() {
    const { brandData } = { ...this.state }
    return (
      <div className="brand-wrapper pr" ref="brandWrapper">
        <div>
          {
            brandData.map((item, index) => {
              return <p key={item.id} onClick={() => this.changeBrand(item, index)} className={classNames('menu-item', 'f14', { 'active': item.id === this.state.activeId })} >
                <span className="text ">{item.title}</span>
              </p>
            })
          }
        </div>
      </div>
    );
  }
}
export default brand;