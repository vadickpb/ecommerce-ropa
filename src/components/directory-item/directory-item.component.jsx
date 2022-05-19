import { useNavigate } from "react-router-dom"

import { DirectoryItemContainer, Body, BackgroundImage } from "./directory-item.styles"

const DirectoryItem = ({ cat }) => {
    const {title, imageUrl, route} = cat
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);


    return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl= {imageUrl}/>
        <Body>
          <h2>{title}</h2>
        <p>Compralos Ya!!</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem