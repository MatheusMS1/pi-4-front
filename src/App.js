import './App.css';
import Input from './components/Forms/Input/Input'

function App() {
  return (
    <div className="App">
      <Input type='text' placeholder='text' label='Nome'/>
      <Input type='number' placeholder='number' label='numero'/>
    </div>
  );
}

export default App;
