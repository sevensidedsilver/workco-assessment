import omit from 'lodash.omit'
import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  HANDLE_ADD,
  HANDLE_SUBTRACT
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]

    case REMOVE_FROM_CART:
      let ref = action.productId
      console.log()
      console.log(ref)

      return state
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return omit(state, action.productId)

    case HANDLE_ADD:
      let updateCount = action.count + 1
      let id = action.productId
      return {...state,
        [id]: updateCount
        }

    case HANDLE_SUBTRACT:
      let newCount = action.count - 1
      if (newCount < 1) {
        return omit(state, action.productId)
      } else {
        return {...state,
          [action.productId]: newCount
          }
      }


    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

// export const getAddedIds = state => state.addedIds
export const getAddedIds = state => Object.keys(state.quantityById)


const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }

  }
}

export default cart
