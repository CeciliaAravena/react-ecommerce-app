import  Navbar from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";
import  Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom'

import CartWidget from "./Cardwiget";


import logo from '../../img/logosur.png';
  import './Navbar.css';

  function NavBar() {
    return (
        <>
            <Navbar expand="lg" fixed="top">
                <Container>
                    <div>
                        <NavLink to="/" className="nav--navbrand">
                            <img src={logo} width="80" height="80" className="d-inline-block mx-2" alt="Logo"/>
                        </NavLink>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/" className="nav--navlink">Inicio</NavLink>
                                <NavLink to="/" className="nav--navlink">Planner</NavLink>
                                <NavLink to="/" className="nav--navlink">Servicios</NavLink>
                                <NavLink to="/" className="nav--navlink">Contacto</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </div>
                </Container>
            </Navbar>
            <Navbar style={{height: '20vh'}} />
        </>
    )
}

export default NavBar