import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
    
function App() {
  let numero = 1;
  return (
    <div className="App">
      <Navbar numero = {numero}/>
      <ItemListContainer/>
    </div>
    
    // <BrowserRouter>       
    //   <Navbar numero={numero} />       
    //   <Routes>         
    //     <Route path="/" element={<ItemListContainer />} />         
    //     <Route path="/category/:id" element={<ItemListContainer />} />         
    //     {/* <Route path="/item/:productID" element={<ItemDetailContainer />} />        */}
    //   </Routes>    
    // </BrowserRouter>

  );
}

export default App;
