import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css'

const Checkouts = () => {
        const {state, removeFromCart} = useContext(AppContext);
        const cart = state.products;

        const handleRemove = product => {
                removeFromCart(product)
        }
      
        const handleSumTotal = () => {
                const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
                const sum = cart.reduce(reducer, 0);
                return sum;
        }
          console.log(state)
          console.log(cart.length)
        return (
                <div className="Checkout">
                        <div className="Checkout-content">
                                {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}
                                {/* {cart.map((item)=>(
                                          <div className="Checkout-item">
                                                <div className="Checkout-element">
                                                        <h4>{item.title}</h4> 
                                                        <span>{state.products.title}</span>
                                                </div>
                                                <button
                                                type="button" 
                                                className="btn btn-delete"
                                                onClick={handleRemove}
                                                >
                                                        <i className="fas fa-trash-alt" title='Eliminar'></i>
                                                </button>
                                          </div>
                                   ))}  */}
                                {cart.length > 0 ? (
                                  <div className="Checkout-item">
                                        <div className="Checkout-element">
                                                <h4>{cart.product}</h4> 
                                                <span>{cart.products.title}</span>
                                        </div>
                                        <button
                                                type="button" 
                                                className="btn btn-delete"
                                                onClick={handleRemove}
                                        >
                                                <i className="fas fa-trash-alt" title='Eliminar'></i>
                                        </button>
                                  </div> 
                                ): <h2>Gracais</h2> }
                             
                        </div>
                        {cart.length > 0 && (
                        <div className="Checkout-sidebar">
                                <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                                <Link to="/checkout/information">
                                <button type="button" className="btn-continue">Continuar Pedido</button>
                                </Link>
                        </div>
                        )}
                        
                </div>
        )
}

export default Checkouts;