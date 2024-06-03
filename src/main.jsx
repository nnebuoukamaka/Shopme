import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NoPage from './pages/NoPage.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './reduxStore/configureStore.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement : < NoPage />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
