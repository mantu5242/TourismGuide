// import logo from './logo.svg';
import './App.css';
import react,{ useState } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import LandingPage from './components/pages/LandingPage';
// import Tool from './components/pages/Carousel/Tool';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path ='/login' element={<publicRoute><Login/></publicRoute>}/>
                <Route path ='/register' element={<publicRoute><Register/></publicRoute>}/>
                <Route path ='/home' element={<Home/>}/>
                <Route path ='/' element={<publicRoute> <LandingPage/></publicRoute>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
