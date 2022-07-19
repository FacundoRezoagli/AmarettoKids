import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound/NotFound';
import ShopProvider from './components/ShopProvider/ShopProvider';
import CartView from './components/NavBar/NavBar';
function App() {
  return (
  <ShopProvider>
    <BrowserRouter> 
      <div className="App">
        <Navbar/>
        <Routes> 
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element ={<ItemDetailContainer/>} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/cart" element={<CartView/>}/>
        </Routes>
        
      </div>
    </BrowserRouter> 
   </ShopProvider> 
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
