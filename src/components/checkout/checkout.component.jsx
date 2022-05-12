import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import './checkout.styles.scss'



const Checkout = () => {

    const {cartItems} = useContext(CartContext);
    return (
        <div className='checkout-container'>
            
            <table class="default">
                <tr>
                    <td>Descripcion</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                    <td>Eliminar</td>
                </tr>
                {
                    cartItems.map( (item) => 
                        (<tr>
                            <td>{item.name}</td>
                            <td><button onClick={() => {
                                return item.quantity - 1
                            }}> - </button>{item.quantity}<button> + </button></td>
                            <td>{item.price}</td>
                            <td>X</td>
                        </tr>)
                    )
                }
            </table>

        </div>
    )
}

export default Checkout;
