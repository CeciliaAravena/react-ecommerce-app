import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from '../Item/ItemCount'
import { useState } from "react";
import { useCartContext } from "../../contex/CartContex";
import { useNavigate } from 'react-router-dom';
import useFormatNumber from '../../helpers/useFormatNumber.js';

import './details.css';


function ItemDetail( {detail} ) {

    const navigate = useNavigate();
    const [addCart, setAddCart] = useState(0);
    const { addToCart } = useCartContext();
    const { formatNumber } = useFormatNumber();

    const onAdd = (quantity) => {
            setAddCart(true)
            addToCart( {...detail, quantity:quantity} )
        };

   

      return (
          <>
              <Col key={detail.id} className="card--detail">
                  <Card>
                      <Card.Img src={detail.img} alt="..." />
                      <Card.Body>
                      <Card.Title className="text-center">{detail.name}</Card.Title>
                        <Card.Text className="detail__text--description">{detail.description}</Card.Text>
                        <Card.Text className="detail__text--price">Precio: {formatNumber(detail.price)}</Card.Text>
                        <Card.Text className="detail__text--stock">Stock disponible: {detail.stock}</Card.Text>
                          {!addCart ? (
                               <>
                               {detail.stock > 0 ? (
                                   <ItemCount onAdd={onAdd} stock={detail.stock} />
                               ) : (
                                   <Button onClick={() => {navigate('/')}} className="w-75">
                                       Seguir comprando
                                   </Button>
                               )}
                               </>
                          ) : (
                            <>
                            <Button onClick={() => {navigate('/')}} className="w-75">
                                Seguir comprando
                            </Button>
                            <Button onClick={() => {navigate('/cart')}} className="mt-2 w-75">
                                Ir al carrito
                            </Button>
                        </>  
                        )}
                      </Card.Body>
                  </Card>
              </Col>
          </>
      )
    }


  export default ItemDetail;