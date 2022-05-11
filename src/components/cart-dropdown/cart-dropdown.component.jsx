import './cart-dropdown.styles.scss'

import Button from '../button/button.component'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className="card-items"></div>
            <Button>Ir al Carrito</Button>

        </div>
    )
}

export default CartDropdown