import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/productdetail",
    element: <ProductDetail />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);