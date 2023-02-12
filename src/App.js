import './App.css';
import Welcome from './screen/welcome';
import Login from './screen/login';
import Signup from './screen/signup';
import Home from './screen/home';
import ShoppingCart from './screen/shoppingcart';
import Setting from './screen/setting';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminSetting from './screen/AdminSetting';
import AdminSecondScreen from './screen/AdminSecondPage';
import AdminLastScreen from './screen/Adminthird';
import AdminFirst from './screen/Adminfirst';

function App() {
  return (



<BrowserRouter>
 <Routes>
  <Route path='/' element={<Welcome/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home />}/>

   {/* <Route path='/' element={<AdminSetting/>}/> */}
   {/* <Route path='/' element={<AdminLastScreen/>}/> */}
   {/* <Route path='/' element={<AdminFirst/>}/> */}
   {/* <Route path='/' element={<AdminSecondScreen/>}/> */}

 </Routes>
 </BrowserRouter>





    //  <Welcome />
    // <Signup />
    // <Login />
    //  <Home />
    // <ShoppingCart />
    // <Setting />
   
  );
}

export default App;
