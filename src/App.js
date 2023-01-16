import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Body/Home'
function App() {
  return (
      <BrowserRouter>
     
       
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
   

      </BrowserRouter>
  );
}

export default App;
