import React from 'react';
import Nav from './Nav';
import { useEffect } from 'react';

const Cart = ({ products, cart, removeItem }) => {
  const cartProd = products.filter(prod => cart.includes(prod.id));

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <Nav />
      <ul>
        {cartProd.map(product => (
          <li className='flex align-content-center justify-around' key={product.id}>
            <img className='max-h-[100px]' src={product.image} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
            {/* Use an arrow function to pass arguments */}
            <button onClick={() => handleRemoveItem(product.id)} className='btn btn-danger'>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
