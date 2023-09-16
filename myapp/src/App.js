// import logo from './logo.svg';
import './App.css';
import react from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {/* <Route path ='/login' element={<publicRoute><Login/></publicRoute>}/> */}
                <Route path ='/register' element={<publicRoute><Register/></publicRoute>}/>
                {/* <Route path ='/' element={<publicRoute><Home/></publicRoute>}/> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
