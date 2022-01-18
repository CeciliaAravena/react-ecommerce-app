import Content from './Components/Content/Content';
import ItemLitsContainer from './Components/Item/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (

        <center>
       <NavBar/>
         HOLA SOY APP DE ECOMMERSE
         <ItemLitsContainer greeting= 'hola soy el ItemListCointainer'/>
       <Content/>
       </center>
  );
}

export default App;
