import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length > 0 ? cartItems.map((item) => 
                   ( <CartItem key={item.id} cartItem = {item} />)
                ) : <EmptyMessage>No hay articulos</EmptyMessage>}
            </CartItems>
            <Button onClick = {goToCheckOutHandler} >Ir a la cesta</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown