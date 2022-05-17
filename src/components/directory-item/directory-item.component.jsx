import './directory-item.styles.scss'

const DirectoryItem = ({ cat }) => {

    const {title, imageUrl} = cat
    return (
        <div className="directory-item-container">
        <div className='background-image' style={{ 
          backgroundImage: `url(${imageUrl})`
         }}/>
        <div className="body">
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

export default DirectoryItem