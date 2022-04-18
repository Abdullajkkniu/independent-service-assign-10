import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Home/Header/Header';
import Services from './Components/Pages/Services/Services';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import About from './Components/Pages/About/About';
import Notfound from './Components/NotFound/Notfound';
import CheckOut from './Components/Pages/CheckOut/CheckOut';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Reset from './Components/Pages/Reset/Reset';
import Success from './Components/Success/Success';
import Blog from './Components/Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={ 
        <RequiredAuth>
          <CheckOut></CheckOut>
        </RequiredAuth>
        }></Route>
        <Route path='/success' element={<Success></Success>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
