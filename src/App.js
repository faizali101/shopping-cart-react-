import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import products from './components/PEXELS.json';
import BuyPage from './components/buyPage';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    // const isAlreadyAdded = cartItem.some(product => product.id === item.id);

    if (cartItem.some(product => product.id === item.id)) {
      toast('already added in the cart', {
        type: 'error',
      });
      return;
    }

    setCartItem([...cartItem, item]);
    toast(`${item.name} added to cart`, {
      type: 'success',
    });
  };

  const buyNow = () => {
    if (cartItem.length === 0) {
      toast('Please add some items to the cart first.', {
        type: 'warning',
      });
      return;
    }

    setCartItem([]);
    toast('purchase complete.', {
      type: 'success',
    });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  const cartTotal = cartItem.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="App">
      <div className="container py-4">
        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title mb-0">Products</h2>
              <span className="badge rounded-pill text-bg-light">{products.length} items</span>
            </div>
            <div className="row g-4">
              {products.map(product => (
                <BuyPage key={product.id} product={product} addInCart={addInCart} />
              ))}
            </div>
          </div>

          <div className="col-lg-4 cart-column">
            <div className="cart-panel">
              <h3 className="mb-3">Cart</h3>

              {cartItem.length === 0 ? (
                <p className="empty-cart-text">Your cart is empty.</p>
              ) : (
                <ul className="list-group cart-list">
                  {cartItem.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                        <small className="text-muted">$ {item.price}</small>
                      </div>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="d-flex justify-content-between align-items-center mt-4 total-row">
                <span>Total</span>
                <strong>$ {cartTotal}</strong>
              </div>

              <button className="btn btn-primary w-100 mt-3" onClick={buyNow}>
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
