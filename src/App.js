import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store/Store';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import LoginPage from './Login/Login';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/cart' element={<Cart />}> </Route>

            <Route path='/' element={<LoginPage />}> </Route>


          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
