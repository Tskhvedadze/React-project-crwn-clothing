import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { DirectoryCategory } from '../directory/directory.component'

import {
    BackgroundImage,
    Body,
    DirctoryItemContainer,
} from './directory-item.styles'

type DirectoryItemProps = {
    category: DirectoryCategory
}

const DirctoryItem: FC<DirectoryItemProps> = ({ category }) => {
    const { imageUrl, title, route } = category
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
