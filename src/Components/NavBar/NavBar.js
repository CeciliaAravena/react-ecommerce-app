import  Navbar from "react-bootstrap/Navbar";
import  Container from "react-bootstrap/Container";
import  Nav from "react-bootstrap/Nav";
import  NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../Cartwidget/Cardwiget";
const NavBar = () =>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SURFACE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                     <NavDropdown title="Servicios" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Community Manager</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Diseño Web</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Fotografia</NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#link">Planner</Nav.Link>
                     <Nav.Link href="#link">Contacto</Nav.Link>
                     <Nav.Link href="#link">Ingresar</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
                 <CartWidget/>
            </Container>
            </Navbar>
                   
        </div>
    )
}
export default NavBar;