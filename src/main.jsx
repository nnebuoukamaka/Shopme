import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NoPage from './pages/NoPage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './reduxStore/configureStore.js'
import ProductDetails from './components/ProductDetails.jsx'
import Cart from './components/Cart.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import LikedProducts from './components/LikedProducts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement : < NoPage />
  },
  {
    path: '/productdetails/:id',
    element: <ProductDetails/>,
  },
  {
    path: '/cart',
    element: < Cart/>,
  },
  {
    path: '/favourites',
    element: < LikedProducts/>,
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
