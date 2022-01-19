import Button from 'react-bootstrap/Button';
import  Card from "react-bootstrap/Card";
import  Col  from "react-bootstrap/Col";

import './ItemList.css';


function Item( {product} ) {
 return (
    <Col key={product.id} className="card--product">
        <Card>
            <div className="overflow">
                <Card.Img variant="top" src={product.img} alt="..." />
            </div>
            <Card.Body>
                <Card.Title className="text-center">{product.name}</Card.Title>
                <Card.Text className="text-center">{product.price.toFixed(2)}</Card.Text>
                <Button variant="secondary" className="w-100 text-uppercase">ver detalle</Button>
            </Card.Body>
        </Card>
    </Col>
    )

}
export default Item;