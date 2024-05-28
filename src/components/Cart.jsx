import React from 'react';
import Nav from './Nav';

const Cart = ({ products, cart, removeItem }) => {
  const cartProd = products.filter(prod => cart.includes(prod.id));

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
            <button onClick={() => removeItem(product.id)} className='btn btn-danger'>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
