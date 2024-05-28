import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();

    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter(itemId => itemId !== id);
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList cart={cart} setCart={setCart} products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart products={products} cart={cart} removeItem={removeItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
