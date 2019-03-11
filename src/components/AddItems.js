import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const AddItems = ({products}) => {
  const hasProducts = products.length > 0
  const addNotification = hasProducts ? (
    <p />
    )
   : (
    <p><FontAwesomeIcon icon={faShoppingCart} /> Your cart is empty</p>

  )


  return (<div>{addNotification}</div>)




}

export default AddItems
