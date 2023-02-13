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
import AdminPage from './config/privateroutes';

function App() {
  return (



<BrowserRouter>
 <Routes>
  {/* <Route path='/adminfirstscreen' element={<AdminPage Component={AdminFirst}/>} /> */}
  <Route path='/' element={<Welcome/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home />}/>
  <Route path='/shoppingcart' element={<ShoppingCart />}/>
  <Route path='/setting' element={<Setting />}/>
  <Route path='/adminsetting' element={<AdminSetting/>}/>
  <Route path='/adminlastscreen' element={<AdminLastScreen/>}/>
  <Route path='/adminfirstscreen' element={<AdminFirst/>}/>
  <Route path='/adminsecondscreen' element={<AdminSecondScreen/>}/>
 </Routes>
 </BrowserRouter>


   
  );
}

export default App;
