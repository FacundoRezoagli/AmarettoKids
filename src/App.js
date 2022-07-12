import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar/>
        <Routes> 
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element ={<ItemDetailContainer/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
   
  );
}

export default App;
 // <BrowserRouter>       
    //   <Navbar numero={numero} />       
    //   <Routes>         
    //     <Route path="/" element={<ItemListContainer />} />         
    //     <Route path="/category/:id" element={<ItemListContainer />} />         
    //     {/* <Route path="/item/:productID" element={<ItemDetailContainer />} />        */}
    //   </Routes>    
    // </BrowserRouter>
