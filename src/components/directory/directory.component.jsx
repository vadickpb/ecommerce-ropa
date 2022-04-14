import CategoryItem from '../category-iten/category-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories-container">

        { categories.map((cat) =>  
          (
            <CategoryItem key={cat.id} cat = {cat}/>
            )
        ) }
  
      </div>
    )
}

export default Directory