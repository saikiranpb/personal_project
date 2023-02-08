import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Body/Home'
import Shop from './components/shop/Shop';
import Authentication from './components/Authentication/Authentication';
import Checkout from './components/checkout/Checkout';
function App() {
  return (
      <BrowserRouter>      
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Home/>}/>
              <Route path='shop/*' element={<Shop/>}/>
              <Route path='auth' element={<Authentication/>}/>
              <Route path='checkout' element={<Checkout/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
