import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import './index.css'

class swiper extends Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [{
          imgPath: 'https:////img13.360buyimg.com/jdphoto/jfs/t16819/320/786190875/224761/5ffd0149/5aa8ba25Ne60e7133.png.webp',
          imgId: '1'
        }, {
          imgPath: '//img30.360buyimg.com/jdphoto/jfs/t20683/100/452109090/99159/469febc6/5b0e5a59N50f5376c.png.webp',
          imgId: '2'
        }, {
          imgPath: '//img11.360buyimg.com/jdphoto/jfs/t16873/167/1631907579/73842/3205380a/5ad07d0eN74fff3e6.png.webp',
          imgId: '3'
        }],
      });
    }, 100);
  }
  render() {
    return (
      <div className='swiper'>
        <Carousel className="space-carousel"
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val.imgId}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={val.imgPath}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default swiper;