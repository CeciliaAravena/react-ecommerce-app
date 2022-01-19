import Button from 'react-bootstrap/Button';
import React from 'react';
import { useCounter } from '../../helpers/useCounter';

import './ItemList.css';


function ItemCount( {initial, stock} ) {

     const {counter, handleRest, handleSum} = useCounter(initial, stock);

     return (
         <>
             <span className="item__count--number">
                 <Button variant="outline-secondary" onClick={handleRest}>-</Button>
                 {counter}
                 <Button variant="outline-secondary" onClick={handleSum}>+</Button>
             </span>
         </>
     )
}

export default ItemCount;