import {
    BackgroundImage,
    Body,
    DirctoryItemContainer,
} from './directory-item.styles'

const DirctoryItem = ({ imageUrl, title }) => {
    return (
        <DirctoryItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirctoryItemContainer>
    )
}

export default DirctoryItem
