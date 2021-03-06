import React, { PropTypes } from 'react';

const CartItem = React.createClass({
  propTypes: {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  },
  handleRemove(e){
    e.preventDefault();
    //TODO
  },
  handleIncQty(e){
    e.preventDefault();
    //TODO
  },
  handleDecQty(e){
    e.preventDefault();
    //TODO
  },
  render(){
    const product = this.props.product;
    return (
      <tr className="cart-product">
        <td className="qty">{ product.quantity }</td>
        <td className="description">
          <h3>{ product.name }</h3>
           <p>{ product.description }</p>
        </td>
        <td className="unit-price">{ product.price} &euro;</td>
        <td className="subtotal">{ (product.price * product.quantity).toFixed(2) } &euro;</td>
        <td className="actions">
          <a className="button" onClick={ this.handleIncQty }>+ 1</a>
          <a className="button" onClick={ this.handleDecQty }>- 1</a>
          <a className="button" onClick={ this.handleRemove }>Eliminar</a>
        </td>
      </tr>
    )
  }
});

export default CartItem;