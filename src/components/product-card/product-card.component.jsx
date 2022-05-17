import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img className='image' src={imageUrl}/>
            <div className="footer">
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <Button 
                buttonType='inverted' 
                onClick = { addProductToCart }>
                Añadir a la cesta
            </Button>
        </div>

    )
}

export default ProductCard;