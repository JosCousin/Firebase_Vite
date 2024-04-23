import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import CarsPage from "../src/pages/CarsPage.jsx";
import CarsDetailPage from "../src/pages/CarsDetailPage.jsx"
import App from "./App.jsx";
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <CarsPage />,
      },
      {
        path: "/cars/:car",
        element: <CarsDetailPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
