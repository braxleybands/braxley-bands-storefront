import React, { Component } from 'react';
import VariantSelector from './VariantSelector';
import styled from 'styled-components';
import { Col, Input, Button } from 'antd';
import ProductSlider from './ProductSlider'
import { Helmet } from 'react-helmet'
import {
	FacebookShareButton,
	TwitterShareButton,
	PinterestShareButton,
	FacebookIcon,
	TwitterIcon,
	PinterestIcon,
} from 'react-share';
import ReactGA from 'react-ga'

const ProductContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`

const DescContainer = styled.div`
  width: 100%;
  margin: 2rem auto 4rem;
  text-align: left;
`

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { 
			selectedOptions: defaultOptionValues,
			outOfStock: false, 
			selectedVariant: {
				attrs: {
					available: {
						value: true
					}
				}
			}
		};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
	}
	
	componentDidMount() {
		ReactGA.initialize('UA-103175100-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
	}

  handleOptionChange(event, value) {
    // const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[value.key] = value.props.children;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)


    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
		});
		
		if (this.state.selectedVariant !== undefined) {
			if (this.state.selectedVariant.attrs.available.value === false) {
				this.setState({
					outOfStock: true
				})
			} else if (this.state.selectedVariant.attrs.available.value === true) {
				this.setState({
					outOfStock: false
				})
			}
		}
		else {
			return
		}
	}


  handleQuantityChange(e) {

    const { value } = e.target;

    this.setState({
      selectedVariantQuantity: value
    });
  }

  render() {
		let inStock = this.state.selectedVariant.attrs.available.value
		console.log(this.props.product)
		let OGImage = this.props.product.images[0].src
		let OGPrice = this.props.product.options[2] ? true : false
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.filter(option => option.name !== "Original Price").map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      )
    })
    return (
      <React.Fragment>
				<Helmet>
					<title>{this.props.product.title + " | Elastic Apple Watch Band"}</title>
					<meta name="twitter:title" content={this.props.product.title + " | Elastic Apple Watch Band"} />
					<meta name="og:title" content={this.props.product.title + " | Elastic Apple Watch Band"} />
					<meta name="image" content={OGImage} />
					<meta itemprop="image" content={OGImage} />
					<meta name="twitter:image:src" content={OGImage} />
					<meta name="og:url" content={`https://braxleybands.com/products/${this.props.product.handle}`} />
					<meta name="og:title" content={this.props.product.title + " | Elastic Apple Watch Band"}/>
					<meta name="og:image" content={OGImage.toString} />
				</Helmet>

        <Col xl={14}>
          {this.props.product.images.length ? <ProductContainer><ProductSlider images={this.props.product.images} /></ProductContainer> : <p>No images</p>}
        </Col>

        <Col xl={10} style={{padding: '0 20px'}}>
					<div style={{marginBottom: '20px'}}>
            <h1 className="Product-page__title">{this.props.product.title}</h1>
            <span className="Product-page__price">
						Price:
						{OGPrice ? <h2 style={{textDecoration: "line-through", color: "#999"}}>$29.99</h2> : ''}
						{variant.price ? <h2>${variant.price}</h2> : <h2>${this.props.product.variants[0].price}</h2>}
						</span>
						<DescContainer>
							<div dangerouslySetInnerHTML={{ __html: this.props.product.descriptionHtml }} />
						</DescContainer>
          </div>
          {variantSelectors}
          <div>
            <label className="Product__option-label">
              Quantity
            </label>
            <Input type="number" defaultValue="1" style={{maxWidth: '75px'}} onChange={this.handleQuantityChange} />
          </div>
          <div className="button-container">
						{ inStock ? 
						<Button style={{ marginTop: '20px', fontFamily: 'Lulo Clean One', textTransform: 'uppercase', fontSize: '1rem' }} type="primary" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</Button> 
						: 
						<Button style={{ marginTop: '20px', fontFamily: 'Lulo Clean One', textTransform: 'uppercase', width: '100%', fontSize: '1rem' }}>Out of stock</Button> }
          </div>
					<div className="product-sizing-guide">
						<h3>Sizing Guide</h3>
						<p>Small - 6-inch wrists </p>
						<p>Medium - 6.5 inch wrists</p>
						<p>Large - 7 inch wrists</p>
					</div>
					<div className="product-social-share">
						<FacebookShareButton url={`https://braxleybands.netlify.com/products/${this.props.product.handle}`}>
							<FacebookIcon size={30} />
						</FacebookShareButton>

						<TwitterShareButton url={`https://braxleybands.netlify.com/products/${this.props.product.handle}`}>
							<TwitterIcon size={30} />
						</TwitterShareButton>

						<PinterestShareButton url={`https://braxleybands.netlify.com/products/${this.props.product.handle}`} media={OGImage}>
							<PinterestIcon size={30} />
						</PinterestShareButton>
					</div>
        </Col>

      </React.Fragment>
    );
  }
}

export default Product;
