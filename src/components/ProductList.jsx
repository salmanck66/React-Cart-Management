import React, { useEffect } from 'react';
import Product from './Product';
import toast, { Toaster } from "react-hot-toast";
import Nav from './Nav';

const ProductList = ({ products, setProducts, cart, setCart }) => {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (id) => {
    if (cart.includes(id)) {
      toast.error("Already in cart");
      return;
    }
    setCart((prevCart) => [...prevCart, id]);
  };

  return (
    <>
      <Nav />
      <div className='flex flex-col-2 flex-wrap'>
        {products.map((item) =>
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
            rating={item.rating}
            image={item.image}
            addToCart={addToCart}
          />
        )}
        {/* Use Link to navigate to the cart */}

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
    </>
  );
};

export default ProductList;
