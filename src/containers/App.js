import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


import './App.scss'


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const App = () => (
  <div className="App">
    <h2>Acme Store</h2>
    <p><FontAwesomeIcon icon={faShoppingCart} /> Your cart is empty</p>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
