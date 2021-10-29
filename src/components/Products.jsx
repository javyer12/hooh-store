import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product'
import '../styles/components/Products.css'

const Products = () => {
        const { state: { products }, addToCart }= useContext( AppContext );
        

        const handleAddToCart = product => () => {
                const random = Math.floor(Math.random() * 1000);
                const newProduct = {...product, cartId : `${product.id}-${random}`}
                console.log(newProduct);
                addToCart(newProduct)
        }
        return (
               <div className="Products">
                       <div className="Products-items">
                               {products.map(product => (
                                  <Product key={ product.id } product={ product }  handleAddToCart={handleAddToCart}/>
                                ))
                               }
                       </div>
               </div>
        )
}

export default Products;
