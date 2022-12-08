import React from "react";
import "./Navbar.css"
import Logo from "../Imagenes/logo-atomik.png"
import { Nav,Navbar,Container,} from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="containerNav">
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt='logoAtomik' />
                    </div>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ul className="contenedorMenu">
                        <Link className="menu" to="/">Inicio</Link>
                        <Link className="menu" to="/productos">Productos</Link>
                        <Link className="menu" to="/contacto">Contacto</Link>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
