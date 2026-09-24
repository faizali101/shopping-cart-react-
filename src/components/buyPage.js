import React from 'react';

function BuyPage({ product, addInCart }) {
  return (
    <div className="col-md-6">
      <div className="card h-100 product-card shadow-sm">
        <img src={product.image} alt={product.name} className="card-img-top product-image" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text mb-3">{product.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="product-price">$ {product.price}</span>
            <button className="btn btn-primary btn-sm" onClick={() => addInCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
