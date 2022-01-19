import { useState, useEffect } from 'react';
 import { getItem } from '../../helpers/getItem';
 import Row from 'react-bootstrap/Row';
 import ItemDetail from './ItemDetails';
 import Loading from '../animation/Loading';

 function ItemDetailContainer() {

     const [detail, setDetail] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(() => {
         getItem
         .then(respData => setDetail(respData))
         .catch(error => console.log(error))
         .finally(() => setLoading(false))
     }, [])

     return (
         <>
             <h3 className="head--title">Detalle Producto</h3>
             <Row>
                 { loading ? 
                     <Loading />
                     :
                     <ItemDetail key={detail.id} detail={detail} />
                 }
             </Row>
         </>
     )
 }

 export default ItemDetailContainer;