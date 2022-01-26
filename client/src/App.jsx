import Cart from './pages/Cart';
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from './pages/Register';


import { Link,Route , Routes} from "react-router-dom";


const App = () => {
  return(
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
            
         
        </Routes>
      
  );
};

export default App;