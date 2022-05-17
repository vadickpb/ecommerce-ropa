import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'
import { Link } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    
    return (
        <div className='cart-dropdown-container'>
            <div className="card-items">
                {cartItems.map((item) => 
                   ( <CartItem key={item.id} cartItem = {item} />)
                )}
            </div>
            <Link to='/checkout'>
                <Button>Ir a la cesta</Button>
            </Link>
        </div>
    )
}

export default CartDropdown