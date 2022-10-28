import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <h1>E-Comm Project</h1> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update' element={<UpdateProduct />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
