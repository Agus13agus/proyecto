import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item';
import Email from './Componentes/Email/Email';


function App() {
  return (
    <div className="App">
      <Email></Email>
      <Item></Item>
    </div>
  );
}

export default App;
