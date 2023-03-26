import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setcategories } from '../../store/categories/category.action'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments()
            dispatch(setcategories(categoriesArray))
        }
        getCategoriesMap()
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop
