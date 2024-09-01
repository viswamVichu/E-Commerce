import React, { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import axios from "axios";
import Card from "../Card/Card";

const Body = () => {
  const [product, setProduct] = useState([]);
  const [isloading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(" https://fakestoreapi.com/products");
      setProduct(data.data);
      setLoading();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(product);
  if (isloading) {
    return (
      <>
        <div className='2xl:container mx-auto'>
          <div className='w-[90%] mx-auto grid grid-cols-1  '>
            <ShimmerSimpleGallery card imageHeight={300} caption />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='2xl:container mx-auto'>
          <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {product.map((items) => {
              return (
                <Card
                  id={items.id}
                  key={items.id}
                  image={items.image}
                  title={items.title}
                  description={items.description}
                  price={items.price}
                  category={items.category}
                  rating={items.rating}
                  count={items.count}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Body;
