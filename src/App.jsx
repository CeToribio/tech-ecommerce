import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Categories from './pages/categories/Categories';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/categories' element={<Categories></Categories>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
