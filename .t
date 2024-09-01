import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { ProductOfData } from "./api/ProductOfData";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
      // {
      //   path: ".api",
      //   element: <ProductOfData />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);















// useFetchProductDataById.js   //product details
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProductDataById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  return { productData, loading };
};

export default useFetchProductDataById;
 id={items.id}
                 