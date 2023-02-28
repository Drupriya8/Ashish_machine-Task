
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Footer from "./components/Footer";


import Cart from "./pages/Cart";
import Electronic from "./pages/Electronic";

import Jewelery from "./pages/Jewelery";
import Menclothing from "./pages/Menclothing";
import WomenClothing from "./pages/WomenClothing";


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/electronic" element={<Electronic/>}/>
      <Route path="/jewlery" element={<Jewelery/>}/>
      <Route path="/men" element={<Menclothing/>}/>
      <Route path="/women" element={<WomenClothing/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
