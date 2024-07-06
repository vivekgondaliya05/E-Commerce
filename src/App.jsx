import React from 'react'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<LoginPage />
    },
    {
      path:"/signup",
      element:<SignupPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App