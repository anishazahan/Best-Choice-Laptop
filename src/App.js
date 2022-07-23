
import './App.css';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Service from './Pages/Services/Service';
import Login from './Shared/Header/Login';
import SignUp from './Shared/Header/SignUp';
import Contact from './Pages/Contact/Contact';
import Notfound from './Shared/NotFound/Notfound';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/products' element={<Products></Products>}></Route>
    <Route path='/services' element={<Service></Service>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
