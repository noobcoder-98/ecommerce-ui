import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'
import reviewReducer from './reviewReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  auth: authReducer, // to call is from our component we use this.props.auth
  users: userReducer,
  errors: errorReducer,
  products: productReducer,
  cart: cartReducer,
  reviews: reviewReducer,
})
