import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getFetch } from '../../helpers/getFech';
import Loading from '../animation/Loading';
import ItemList from './ItemList';


import './ItemList.css';

function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            getFetch
            .then(respData => setProducts(respData.filter(product => product.category === idCategory)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(respData => setProducts(respData))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [idCategory])

     return (
          <>
              <Container>
                  <div className="head--product">
                      <h2>{props.heading}</h2>
                      <NavDropdown title="Digital" id="offcanvasNavbarDropdown">
                          <NavDropdown.Item>
                              <Link className="dropdown--item" to="/categoria/Community Manager">Community Mannager</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                              <Link className="dropdown--item" to="/categoria/Diseño Web">Diseño Web</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                              <Link className="dropdown--item" to="/categoria/Fotografia">Fotografia</Link>
                          </NavDropdown.Item>
                      </NavDropdown>
                  </div>
                  <div className="d-flex justify-content-center">
                  { loading ? (
                          <Loading load='Cargando Servicios' />
                      ) : (
                          <ItemList products={products} />

                      )}
                  </div>
              </Container>
          </>
     )
 }

 export default ItemListContainer;