import React from 'react'
import Announcement from '../components/Annoucement/Announcement';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Categories from '../components/Categories/Categories';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home;
