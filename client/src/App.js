
import './App.css';
import Home from './pages/Home';
// import ProductList from './pages/ProductList';
// import Product from './pages/Product';
// import Register from './pages/Register';
// import Login from './pages/Login';
import Cart from './pages/Cart'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

function App() {
    return 
    <Router>
        <Switch>
            <Route>
                <Home/>
            </Route>;
        </Switch>
    </Router>
}

export default App;
