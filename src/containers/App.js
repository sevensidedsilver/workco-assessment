import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { connect } from 'react-redux'


import { getCartProducts } from '../reducers'

import './App.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const App = ({products}) => (
  <div className="App">
    <div className="titleHead">
      <h2>Acme Store</h2>
      <p><FontAwesomeIcon icon={faShoppingCart} /> Your cart is empty</p>
    </div>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state)
})

export default connect(
  mapStateToProps
)(App)
