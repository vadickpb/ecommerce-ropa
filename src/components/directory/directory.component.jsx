import DirectoryItem from '../directory-item/directory-item.component'

import { DirectoryContainer } from './directory.styles'

const categories = [
  {
    "id": 1,
    "title": "gorras",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route" : "shop/gorras"
  },
  {
    "id": 2,
    "title": "casacas",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route" : "shop/casacas"
  },
  {
    "id": 3,
    "title": "zapatillas",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route" : "shop/zapatillas"
  },
  {
    "id": 4,
    "title": "mujeres",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route" : "shop/mujeres"
  },
  {
    "id": 5,
    "title": "hombres",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route" : "shop/hombres"
  }
]
const Directory = () => {
    return (
        <DirectoryContainer>

        { categories.map((cat) =>  
          (
            <DirectoryItem key={cat.id} cat = {cat}/>
            )
        ) }
  
      </DirectoryContainer>
    )
}

export default Directory