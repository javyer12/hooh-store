import React from 'react'
import '../styles/components/Products.css';

const Product = ({product, handleAddToCart  }) => {
        return (
                <div className="Products-item">
                        <img src={product.image} alt={product.title}/>
                        <div className="Products-item-info">
                                <h2>  {product.title}
                                  <span>
                                        {' '}
                                        <span>Lps  </span>
                                        {product.price}
                                  </span>
                                </h2>
                                <h4> {product.description}</h4>
                        </div>
                        <button type="button"  onClick={handleAddToCart(product)} id='buy-btn' className="btn-button">Comprar</button>
                </div>
        )
}

export default Product;


// rafce