import DirctoryItem from '../directory-item/directory-item.component'

import './directory.styles.scss'

const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <DirctoryItem key={category.id} {...category} />
            ))}
        </div>
    )
}

export default Directory
