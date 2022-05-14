import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'



const Checkout = () => {

    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Producto</span>
                </div>
                <div className="header-block">
                    <span>Descripción</span>
                </div>
                <div className="header-block">
                    <span>Cantidad</span>
                </div>
                <div className="header-block">
                    <span>Precio</span>
                </div>
                <div className="header-block">
                    <span>Eliminar</span>
                </div>
            </div>
                {cartItems.map( (cartItem) => <CheckoutItem key={cartItem.id} cartItem = {cartItem} />)}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;
