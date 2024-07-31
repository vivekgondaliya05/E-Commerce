import React from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,  
    },
    {
      path: "/shoppingCart",
      element: <ShoppingCartPage />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },  
    {
      path: "/productDetail/:id",
      element: <ProductDetailsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
