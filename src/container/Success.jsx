import React from 'react';
import '../styles/components/Success.css'

const Successes = () => {
        return (
              <div className="Success">
                      <div className="Success-content">
                              <h2>Gracais por tu compra</h2>
                              <span>Tu pedido llegara en tres dias a tu direccion: </span>
                              <div className="Success-map">
                                      Goolge map
                              </div>
                      </div>
              </div>
        )
}

export default Successes;