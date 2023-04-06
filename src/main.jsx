import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Layout/Home";
import Order from "./Components/OrderPage/Order";
import Inventory from "./InventoryPAge/Inventory";
import Login from "./Components/Header/LoginPage/Login";
import cartProductsLoader from "./loaders/cartProductsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "Manage Inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
