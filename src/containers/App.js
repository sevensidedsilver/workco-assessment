import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { connect } from 'react-redux'
import AddItems from '../components/AddItems'
import { getCartProducts } from '../reducers'


import './App.scss'






const App = ({products}) => (
  <div className="App">
    <div className="titleHead">
      <h2>Acme Store</h2>
      <AddItems products={products}/>

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
