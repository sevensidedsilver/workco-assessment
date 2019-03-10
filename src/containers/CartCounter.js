import React from "react"

import { updateCount } from '../actions'

class CartCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: this.props.count};
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value)
  }

  render() {
    return (
      <div className="cartCounter">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} type="text" value={this.state.value}/>
          <input type="submit" value="Update" />
        </form>
      </div>

    )

  }

}



export default CartCounter
