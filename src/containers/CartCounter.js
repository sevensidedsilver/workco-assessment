import React from "react"




const CartCounter = ({count, productId, handleAdd, handleSubtract}) => {

  return (
    <div className="cartCounter">
        <button className="countSub" onClick={handleSubtract}>-</button>
        <p>{count}</p>
        <button className="countAdd" onClick={handleAdd}>+</button>
    </div>
  )



}

export default CartCounter
