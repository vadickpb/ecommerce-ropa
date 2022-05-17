import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'

const Directory = ({categories}) => {
    return (
        <div className="categories-container">

        { categories.map((cat) =>  
          (
            <DirectoryItem key={cat.id} cat = {cat}/>
            )
        ) }
  
      </div>
    )
}

export default Directory