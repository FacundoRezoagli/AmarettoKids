import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  let numero = 1;
  let greeting = "Si estas leyendo esto es porque aprendi a pasar propiedades en react";
  return (
    <div className="App">
      <Navbar numero = {numero}/>
      <ItemListContainer greeting = {greeting}/>
    </div>
  );
}

export default App;
