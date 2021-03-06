import React from 'react'
import { categories } from '../../data/data';
import CategoryItem from '../CategoryItem/CategoryItem';
import { Container } from './Categories.styles';

const Categories = () => {
    return (
        <Container>
            {categories.map(item =>(
                <CategoryItem  item={item} key={item.id}/>
            ))}

        </Container>
    )
}

export default Categories;
