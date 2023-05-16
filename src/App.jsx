import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/category/:category" element={<Category/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
