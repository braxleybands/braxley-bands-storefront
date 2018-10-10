import React, { Component } from 'react';
import LineItem from './LineItem';
import { Icon } from 'antd';
import styled from 'styled-components'

const LoaderContainer = styled.div`
	position: absolute;
  top: 20px;
  left: 20px;
`

class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {

    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
					{this.props.loading ? 
					<LoaderContainer>
						<Icon type="loading-3-quarters" style={{ fontSize: 24 }} spin />
					</LoaderContainer>
					: null
					}
					<button className="Cart__close" onClick={this.props.handleCartClose}>
					<Icon type="close" style={{ fontSize: 24, color: '#000' }} />
					</button>
        </header>
        <ul className="Cart__line-items">
					{line_items}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )
  }
}

export default Cart;
