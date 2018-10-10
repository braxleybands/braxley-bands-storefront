import React, {Component} from 'react'
import Product from './Product'
import Placeholder from './Placeholder';
import { Row } from 'antd';
import styled from 'styled-components'

const BgContainer = styled.div`
	position: relative;
	display: inline-block;
	/* padding-top: 4rem; */
	padding-top: 0rem;
	padding-bottom: 4rem;
	width: 100%;
	font-size: 1.5rem;
	height: 100%;
	background: linear-gradient(rgba(255,255,255, .75),rgba(255,255,255, .75)), url("https://res.cloudinary.com/devhound/image/upload/f_auto,q_auto/v1531510140/marble-bg_kbnoeg.jpg") no-repeat;
	background-position: center;
	background-size: cover;

	@media (max-width: 768px) {
		padding-bottom: 0rem;
	}
`

class ProductPage extends Component {

  constructor() {
    super();

    this.state = { 
      product: [],
    }
  }

  componentWillMount() {
    this.props.client.product.fetchByHandle(this.props.match.params.id).then((res) => {
      this.setState({
        product: res 
      })
    })
  }

  render() {
    return (
			<BgContainer>
      <div className="content-wrapper product">
        <Row>

          {this.state.product.title ?

							<Product
              addVariantToCart={this.props.addVariantToCart}
              client={this.props.client}
              key={this.props.match.params.id}
              product={this.state.product}
							/>
							
							: 
							
							<Placeholder />
						}

        </Row>
      </div>
			</BgContainer>
    )
  }
}

export default ProductPage
