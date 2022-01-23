import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFech';
import ItemDetail from './ItemDetails';
import Loading from '../animation/Loading';
import Container from 'react-bootstrap/Container';


 function ItemDetailContainer() {

    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const {idDetail} = useParams()

    useEffect(() => {
        getFetch
        .then(respData => setDetail(respData.find(detail => detail.id === parseInt(idDetail))))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [idDetail])

     return (
        <Container>
            <h2 className="head--detail">Detalle Producto</h2>
            <div>
                { loading ? 
                    <Loading />
                    :
                    <ItemDetail key={detail.id} detail={detail} />
                }
            </div>
        </Container>
    )
}

 export default ItemDetailContainer;