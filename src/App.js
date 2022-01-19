import ItemListContainer from "./Components/Item/ItemListContainer";
 import NavBar from "./Components/NavBar/NavBar";
 import ItemDetailContainer from './Components/Details/ItemDetailsContainer';
 import SlideBar from './Components/NavBar/SlideBar';

  import './App.css'


  function App() {

    return (
      <>
        <div className="container--fluid">
       <NavBar />
       <SlideBar titulo='Título desde App' subtitulo='Subtítulo desde App' />
       <ItemListContainer greeting='Encabezado' />
       <ItemDetailContainer />
     </div>
      </>

    );
  }

 export default App;
