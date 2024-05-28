import React from 'react';
import Product from './Product';
import toast, { Toaster } from 'react-hot-toast';
import Nav from './Nav';

const ProductList = ({ products, cart, addToCart }) => {
  return (
    <>
      <Nav />
      <div className='flex flex-col-2 flex-wrap'>
        {products.map((item) => (
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
        ))}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  );
};

export default ProductList;
