import React from 'react'
import Announcement from '../components/Annoucement/Announcement';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home;
