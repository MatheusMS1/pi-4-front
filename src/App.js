import './App.css';
import BtnSalvar from './components/Forms/BtnSalvar';
import BtnVoltar from './components/Forms/BtnVoltar';
import Input from './components/Forms/Input'
import Select from './components/Forms/Select';
import Textarea from './components/Forms/Textarea';

function App() {
  return (
    <div className="App">
      <Input type='text' placeholder='text' name='Nome'/>
      <Input type='number' placeholder='number' name='numero'/>
      <Textarea name='textarea' placeholder='tralala'/>
      <Select name='select'>
        <option>ala</option>
        <option>ala</option>
        <option>ala</option>
        <option>ala</option>
        <option>ala</option>
      </Select>
      <BtnVoltar/>
      <BtnSalvar/>
    </div>
  );
}

export default App;
