import React from 'react'
import '../styles/components/Products.css';

const Product = ({product, handleAddToCart  }) => {
        return (
                <div className="Products-item">
                        <img src={product.image} alt="Product"/>
                        <div className="Product-item-info">
                                <h2>{product.title}
                                  <span>
                                        {' '}
                                        $
                                        {product.price}
                                  </span>
                                </h2>
                                <h4> {product.description}</h4>
                        </div>
                        <button type="button"  onClick={handleAddToCart} className="btn-buy">Comprar</button>
                </div>
        )
}

export default Product;


// rafce