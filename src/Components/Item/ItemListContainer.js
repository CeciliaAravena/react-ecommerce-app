import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFech'
import ItemList from '../Item/ItemList'


  function ItemListContainer( {greeting} ) {
     const [products, setProducts] = useState([])
     const [loading, setLoading] = useState(true)



     useEffect(() => {
             getFetch
             .then(resp => setProducts(resp)) 
             .catch(err => console.log(err))
             .finally(()=>setLoading(false))            
     },[])

     // [] => retorna otro array [<li>1</li>,....]
     return (
        <div>
            { greeting }
              { loading ? 
                  <h2>Cargando...</h2> 
                  :  
                  <ItemList products={products}/>
              }
          </div>
      )
  }

  export default ItemListContainer;