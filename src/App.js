import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import HomePage from './components/pages/HomePage'
import ProductDetailPage from './components/pages/ProductDetailPage'

import PrivateRoute from './components/common/PrivateRoute'

import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'
import { logoutUser, setCurrentUser } from './store/actions/authActions'
import { getAllProducts } from './store/actions/productActions'
import UnderDevelopmentPage from './components/pages/UnderDevelopmentPage'
import CartPage from './components/pages/CartPage'
import Checkout from './components/pages/Checkout'
import DashboardPage from './components/pages/DashboardPage'

const actionsOnPageLoad = () => {
  // store.dispatch(getAllProducts())
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken)
    // Decode token and get user info and expiration
    const decoded = jwt_decode(localStorage.jwtToken)
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded))
    // Check for expired token
    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser())
      window.location.href = '/login'
    }
  }
}
actionsOnPageLoad()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={'/'}
            render={(routeProps) => (
              <HomePage {...routeProps} showForm={false} checkIsAdmin={false} />
            )}
          />
          <PrivateRoute exact path={'/dashboard/:type'} component={DashboardPage} />

          <Route
            exact
            path={'/:productName/:productId'}
            render={(routeProps) => <ProductDetailPage {...routeProps} />}
          />
          <Route
            exact
            path={'/underDevelopment'}
            render={(routeProps) => (
              <UnderDevelopmentPage {...routeProps} status={'underDevelopment'} />
            )}
          />
          <Route
            exact
            path={'/notFound'}
            render={(routeProps) => <UnderDevelopmentPage {...routeProps} status={'notFound'} />}
          />
          <PrivateRoute exact path={'/cart'} component={CartPage} />
          <PrivateRoute exact path={'/checkout'} component={Checkout} />
          <Route render={(routeProps) => <UnderDevelopmentPage {...routeProps} status={'404'} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
