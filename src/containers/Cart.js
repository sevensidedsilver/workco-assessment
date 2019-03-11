import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart, handleAdd, handleSubtract } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Product from '../components/Product'
import CartCounter from './CartCounter'

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
        <button onClick={() => removeFromCart(product.id)} />
        <CartCounter
          count={product.quantity}
          productId={product.id}
          handleAdd={() => handleAdd(product.quantity, product.id)}
          handleSubtract={() => handleSubtract(product.quantity, product.id)}
          />
      </div>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
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