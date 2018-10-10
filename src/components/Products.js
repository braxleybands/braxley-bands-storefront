import React, { Component } from 'react';
import HomeProduct from './HomeProduct';
import { Row } from 'antd';
import HomePlaceholders from './HomePlaceholders';

class Products extends Component {
  render() {

    let products = this.props.products.map((product) => {
      return (
        <HomeProduct
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="content-wrapper">
				{
				this.props.products.length > 0 ? 
				<Row type="flex" justify="center">{products}</Row> 

				: 

				<Row type="flex" justify="center">
					<HomePlaceholders />
				</Row>
				}
      </div>
    );
  }
}

export default Products;
