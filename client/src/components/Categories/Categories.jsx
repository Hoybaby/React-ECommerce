import React from 'react'
import { categories } from '../../data/data';
import CategoryItem from '../CategoryItem/CategoryItem';


const Categories = () => {
    return (
        <Container>
            {categories.map(item => {
                <CategoryItem item={item}/>
            })}

        </Container>
    )
}

export default Categories;
