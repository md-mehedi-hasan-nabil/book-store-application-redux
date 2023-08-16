import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Wishlist from "../pages/Wishlist";
import MyCollection from "../pages/MyCollection";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "my-collection",
        element: <MyCollection />,
      },
    ],
  },
]);
