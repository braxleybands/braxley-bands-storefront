import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Col } from 'antd';
import _ from 'lodash/core'

const StyledProduct = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px 20px;
	margin: 0 auto;
	
`

const ProductImg = styled.img`
	max-width: 100%;
	max-height: 200px;
	transition: all 300ms ease;
`

class HomeProduct extends Component {
  constructor(props) {
    super(props);
	
    this.findImage = this.findImage.bind(this);
	}
	
  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  slugify = (string) => {
    return string
      .toString()
      .trim()
      .toLowerCase()
			.replace(/\s+/g, "-")
			.replace(/é/g, "e")
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, "")
      // eslint-disable-next-line
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  render() {
    let variantImage = this.props.product.images[0]
		let price = this.props.product.variants[0].price
    let slugUrl = this.slugify(this.props.product.title)

    return (
      <Col sm={24} md={12} xl={8}>
        <StyledProduct>
					{this.props.product.images.length 
					? 
					<Link className="product-img-link" to={{ pathname: `products/${slugUrl}/`}}>
						<ProductImg src={variantImage.src} alt={`${this.props.product.title} product shot`} /> 
					</Link>

					:	null}
					
          <Link to={{
            pathname: `products/${slugUrl}/`,
            state: { exactId: this.props.product.id }
          }}>
            <h5 className="Product__title">{this.props.product.title}</h5>
          </Link>
					
					{_.find(this.props.product.options, { 'name': 'Original Price' }) ? <span className="Product__price" style={{textDecoration: "line-through", color: "#999"}}>$29.99</span> : ''}
					{_.find(this.props.product.variants, { 'available': true }) ? <span className="Product__price">${price}</span> : <span className="Product__price">Out of Stock</span>}
        </StyledProduct>
      </Col>
    );
  }
}

export default HomeProduct;