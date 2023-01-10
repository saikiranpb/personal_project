import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Body/Home'
function App() {
  return (
      <BrowserRouter>
        <Header/>
        <div style={{display:'flex',height:'570px',backgroundColor:'#9d9292',fontWeight:'bold',padding:'10px 30px'}}>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        {/* <Home/> */}
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
