import { useNavigate } from 'react-router-dom'

import {
    BackgroundImage,
    Body,
    DirctoryItemContainer,
} from './directory-item.styles'

const DirctoryItem = ({ imageUrl, title, route }) => {
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirctoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirctoryItemContainer>
    )
}

export default DirctoryItem
