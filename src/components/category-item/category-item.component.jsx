import './category-item.styles.scss'

const CategoryItem = ({ cat }) => {

    const {title, imageUrl} = cat
    return (
        <div className="category-container">
        <div className='background-image' style={{ 
          backgroundImage: `url(${imageUrl})`
         }}/>
        <div className="category-body-container">
          <h2 className="title">
            {title}
          </h2>
          <p className="subtitle">
            Compralos Ya!!
          </p>
        </div>
      </div>
    )
}

export default CategoryItem