import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {

    const {name, id, price, imageUrl} = product;

    return (
        <div className='product-card-container'>
            <img className='image' src={imageUrl}/>
            <div className="footer">
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <Button buttonType='inverted'>Agregar al carrito</Button>
        </div>

    )
}

export default ProductCard;