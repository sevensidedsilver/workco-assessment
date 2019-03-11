import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


import './App.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const App = () => (
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

export default App
