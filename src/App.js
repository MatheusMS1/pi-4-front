import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Config from './components/Pages/Config/Config';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/teste' element={ <Teste/> } />
          <Route path='/' element={ <Home/> } />
          <Route path='/config' element={ <Config/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
