import './App.css';
import Header from './components/Header/Header';
import ModeloForm from './components/ModeloForm/ModeloForm';
import ModeloToggleForm from './components/ModeloForm/ModeloToggleForm';

function App() {
  return (
    <div className="container">
      <Header/>
      <ModeloForm/>
      <ModeloToggleForm/>
    </div>
  );
}

export default App;
