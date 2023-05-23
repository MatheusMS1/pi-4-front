import './App.css';
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
    </div>
  );
}

export default App;
