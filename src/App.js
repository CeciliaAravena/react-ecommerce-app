import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from "./Components/Item/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from './Components/Details/ItemDetailsContainer';
import FooterContainer from "./Components/footer/FooterContainer";
import HomeContainer from "./Components/home/HomeContainer";

import './App.css';

import CartContainer from "./Components/cart/CartContainer";

  import './App.css'

  function App() {
    return (
      <div className="container--fluid bg--colors">
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
               element={<ItemListContainer heading='Servicio Filtrado'/>} 
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
                path="*"
                element={<Navigate replace to="/" />}
              />
 
          </Routes>
          <FooterContainer />
        </BrowserRouter>
      </div>


    );
  }

 export default App;
