import Content from './Components/Content/Content';
import ItemCount from './Components/Item/ItemCount';
import ItemLitsContainer from './Components/Item/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {
  const inicial = 1
   const max = 10


    return (
      <>
       <NavBar/>
       <ItemLitsContainer greeting= 'hola soy el ItemListCointainer'/>
       <Content/>
       <div clasName= 'ecommerce-arapp'>
         <ItemCount inicial={inicial} max={max} />
       </div>
      </>
  );
}

export default App;
