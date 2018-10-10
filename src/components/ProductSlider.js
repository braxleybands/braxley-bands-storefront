import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      dots: false,
			arrows: false,
			fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: false
    };

    const images = this.props.images.map((image, index) => {
      return (
        <div key={index}>
          <img className="product-slide-img" alt={image.altText} src={image.src} />
        </div>
      )
    })

    const thumbnailImages = this.props.images.map((image, index) => {
      return (
        <div key={index}>
          <img className="thumbnail-img" alt={image.altText} src={image.src} />
        </div>
      )
    })

    return (
      <div>
        <Slider className="main-product-slider" asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)} {...settings}>
          {images}
        </Slider>
        <Slider 
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
					infinite={true}
					arrows= {false}
					className="slider-thumbnails"
			>
          {thumbnailImages}
        </Slider>
      </div>
    );
  }
}