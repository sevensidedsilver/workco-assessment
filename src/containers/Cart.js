import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart, handleAdd, handleSubtract } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Product from '../components/Product'
import CartCounter from './CartCounter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Cart  = ({ products, total, onCheckoutClicked, removeFromCart, handleAdd, handleSubtract }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div className="cartProduct" key={product.id}>
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}

        />
        <p className="remove" onClick={() => removeFromCart(product.id)}>Remove</p>
        <CartCounter
          count={product.quantity}
          productId={product.id}
          handleAdd={() => handleAdd(product.quantity, product.id)}
          handleSubtract={() => handleSubtract(product.quantity, product.id)}
          />
      </div>
    )
  ) : (
    <div className="defaultCart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <em>Please add some products</em>
      <em>to your cart.</em>
    </div>
  )

  return (
    <div className="cartContain">
      <h3>Your Cart</h3>
      <hr />
      <div>{nodes}</div>
      <hr />
      <div className="cartTotal">
        <p>Subtotal: {total}</p>
        <p>Taxes: {(total * .065).toFixed(2)}</p>
        <hr/>
        <p>Total: &#36;{(parseFloat(total) + parseFloat((total * .065).toFixed(2)))}</p>
      </div>

      <button
        className="checkout"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        CHECKOUT
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { removeFromCart, handleAdd, handleSubtract }
)(Cart)
