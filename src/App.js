
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Notfound from './Components/NotFound/NotFound';
import Destinations from './Components/Destinations/Destinations';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import Privateroute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/destinations' element={<Destinations></Destinations>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/blog' element={
          <Privateroute>
            <Blog/>
          </Privateroute>
        } >
        </Route>
        
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
