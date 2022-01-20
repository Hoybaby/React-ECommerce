
import './App.css';
import React from "react";

import Home from './pages/Home';
import ProductList from './pages/ProductList';
// import Product from './pages/Product';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Cart from './pages/Cart'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

const App = () => { 
    return(
    <Router>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/products" element={<ProductList/>} />
                
        </Routes>
    </Router>
    );
}

export default App;
