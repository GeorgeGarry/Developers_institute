import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" > Home</Link>
        <Link to="/shop" > Shop</Link>
      </nav>

      {/* <Home/> */}
      {/* <Products/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/shop' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;


{/* <header className="App-header"> */}
      {/* </header> */}