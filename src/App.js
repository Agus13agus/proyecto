import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componentes/Item/Item';
import Email from './Componentes/Email/Email';
import Html from './Componentes/Html/Html';

function App() {
  return (
    <div className="App">
      <Html></Html>
      <Email></Email>
      <Item></Item>
    </div>
  );
}

export default App;
