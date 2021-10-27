import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => {
        return (
               <div className="Information">
                       <div className="Information-content">
                               <div className="information-head">
                                       <h2>Informacion de contacto: </h2>
                               </div>
                               <div className="Information-form">
                                       <form className="">
                                               <input type="text" className="form-control" name='name'placeholder='Nombre completo'/>
                                               <input type="text" className="form-control" name='gmail'placeholder='Gmail'/>
                                               <input type="text" className="form-control" name='apto' placeholder='Apto' />
                                               <input type="text" className="form-control" name='city' placeholder='City'/>
                                               <input type="text" className="form-control" name='Pais' placeholder='Pais'/>
                                               <input type="text" className="form-control" name='estado' placeholder='State'/>
                                               <input type="text" className="form-control" name='cp' placeholder='Codigo Postal'/>
                                               <input type="text" className="form-control" name='phone' placeholder='phone'/>
                                        </form>
                               </div>
                               <div className="Information-buttons">
                                       <div className="Information-back">Regresar
                                       </div>
                                       <div className="Information-next">
                                        <Link to='/payments'>
                                                Pagar
                                        </Link>
                                       </div>
                               </div>
                       </div>
                       <div className="Information-sideback">
                               <h3>Pedido: </h3>
                               <div className="information-item">
                                       <div className="Information-element">
                                                <h4>Item name</h4>
                                                <span> $45</span>
                                       </div>
                               </div>
                       </div>
               </div>
        )
}

export default Information;