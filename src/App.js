import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Teste from './components/Pages/Teste/Teste';
import Home from './components/Pages/Home/Home';
import Config from './components/Pages/Config/Config';
import NewEquipment from './components/Pages/NewEquipment/NewEquipment';
import Login from './components/Pages/Login/Login';
import NewResponsible from './components/Pages/NewResponsible/NewResponsible';
import NewMovimentatio from './components/Pages/NewMovimentation/NewMovimentation';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/teste' element={ <Teste/> } />
          <Route path='/' element={ <Home/> } />
          <Route path='/config' element={ <Config/> } />
          <Route path='/equipamentos/new' element={ <NewEquipment/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/responsaveis/new' element={ <NewResponsible/> } />
          <Route path='/movimentacoes/new' element={ <NewMovimentatio/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
