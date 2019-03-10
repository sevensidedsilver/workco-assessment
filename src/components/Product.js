import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product">
    <div className="productHead">
      <h3 className="productName">{title}</h3>
      <p className="price">&#36;{price}</p>
    </div>
      <p className="count">{inventory ? `${inventory} REMAINING` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
