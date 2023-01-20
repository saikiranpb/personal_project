import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Body/Home'
import Shop from './components/Body/Shop';
import SignIn from './components/Sign-in/SignIn';
function App() {
  return (
      <BrowserRouter>      
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Home/>}/>
              <Route path='shop' element={<Shop/>}/>
              <Route path='signIn' element={<SignIn/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
