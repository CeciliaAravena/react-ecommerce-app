import CartContainer from "./Components/cart/CartContainer";
import CartContextProvider from "./contex/CartContex";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from "./Components/Item/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from './Components/Details/ItemDetailsContainer';
import FooterContainer from "./Components/footer/FooterContainer";
import HomeContainer from "./Components/home/HomeContainer";
import CheckoutCart from './Components/checkout/CheckoutCart';

import './App.css';


  function App() {
    return (
      <div className="container--fluid bg--colors">
               <CartContextProvider>
         <BrowserRouter>
           <NavBar />
           <Routes>
             <Route
               exact
               path="/"
               element={<HomeContainer />} 
             />
             <Route 
               exact
               path="/categoria/:idCategory" 
               element={<ItemListContainer heading='Producto Filtrado'/>} 
             />
             <Route 
               exact
               path="/detalle/:idDetail" 
               element={<ItemDetailContainer />} 
             />
             <Route 
               exact
               path="/cart" 
               element={<CartContainer />} 
             />
              <Route 
               exact
               path="/checkoutCart" 
               element={<CheckoutCart />} 
             />
             <Route
               path="*"
               element={<Navigate replace to="/" />}
             />
           </Routes>
           <FooterContainer />
         </BrowserRouter>
       </CartContextProvider>
     </div>
   );
 }
export default App;