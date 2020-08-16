import React, {useState} from 'react';
import {
    Collapse, Nav,
    Navbar,
    NavbarToggler,
    NavLink as BLink
} from "reactstrap";
import { Link, NavLink } from 'react-router-dom';



const PokeNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar color="danger" sticky="true" expand="md">
            <Link className="navbar-brand d-flex" to="/">
                <img className="brand flex-shrink-0" src={`/pokedex-react/assets/images/pkdx.png`} alt="Pokedex"/>
            </Link>
            <NavbarToggler onClick={toggle} className="navbar-dark"/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavLink
                        activeClassName="active"
                        to="/buscar"
                        className="nav-item nav-link"
                    >
                        Search
                    </NavLink>
                </Nav>
                <BLink
                    href="https://github.com/m00nreal/pokedex-react"
                    target="_blank"
                    className="nav-item nav-link"
                >
                    <img className="d-none d-md-block" src={`/pokedex-react/assets/images/github.png`} alt="Github"/>
                    <span className="d-md-none">GitHub</span>
                </BLink>
            </Collapse>
        </Navbar>
    );
};

export default PokeNavbar;
