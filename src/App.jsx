import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { Routes, Route ,BrowserRouter} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    const newCart = cart.filter(itemId => itemId !== id);
    setCart(newCart);
  };
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList cart={cart} setCart={setCart}  products={products} setProducts={setProducts}  />} />
      <Route path="/cart" element={<Cart products={products} cart={cart} removeItem={removeItem} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
