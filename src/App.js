import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './store/Store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/cart' element={<Cart />}> </Route>

         
        </Routes>
      </BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
