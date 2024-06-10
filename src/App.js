import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Pages/Products';
import ProductList from './Pages/ProductList';
import Editappoinment from './Components/Editappoinment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/appoinment'element={<Products></Products>}></Route>
        <Route path='/productlist'element={<ProductList></ProductList>}></Route>
        <Route path="/edit/:id" element={<Editappoinment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
