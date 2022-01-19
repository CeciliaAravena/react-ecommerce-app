import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import { getFetch } from '../../helpers/getFech';
import Loading from '../animation/Loading';
import ItemList from './ItemList';


 import './ItemList.css';

 function ItemListContainer( {greeting} ) {

     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(() => {
         getFetch
         .then(respData => setProducts(respData))
         .catch(error => console.log(error))
         .finally(() => setLoading(false))
     }, [])

     return (
         <>
             <Container>
                 <h2 className="head--title">{greeting}</h2>
                 <div className="d-flex justify-content-center">
                     { loading ? 
                         <Loading />
                         :
                         <ItemList products={products} />
                     }
                 </div>
             </Container>
         </>
     )
 }

 export default ItemListContainer;