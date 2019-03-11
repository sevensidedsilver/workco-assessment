import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import staticImage from '../constants/image.jpg'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }} className="productItem">
    <div className="imageContain">
      <img className="productImage" src={staticImage}/>
    </div>
    <div className="productDetails">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className="addToCart"
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
