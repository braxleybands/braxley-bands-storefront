import React from 'react';
import { Badge, Icon } from 'antd';

class CartIcon extends React.Component {
  render() {
    const cartEmptyBool = this.props.cartEmpty
    return (
      <React.Fragment>
        {cartEmptyBool ?

          <Badge dot>
            <Icon style={{ fontSize: 24, color: '#000'}} type="shopping-cart" />
          </Badge>

          :

          <Badge dot count={0}>
						<Icon style={{ fontSize: 24, color: '#000'}} type="shopping-cart" />
          </Badge>

        }
      </React.Fragment>
    )
  }
}

export default CartIcon