import React from 'react';
import '../styles/components/Payment.css'


const Payments = () => {
        return (
                <div className="Payment">
                        <div className="Payment-content">
                                <h3>Resumen del Pago: </h3>
                                <div className="Payment-button">
                                        Pagar con Paypal
                                </div>
                        </div>
                </div>
        )
}

export default Payments;