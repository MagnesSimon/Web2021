import React from 'react';
import { Nav, Navbar, Form, FormControl , NavbarBrand} from 'react-bootstrap';
import styled from 'styled-components';
import useSticky from "../hooks/useSticky";
import logo from "../../boulangerie/logo.jpg";
import "./Navbar.css"

const Styles = styled.div`
  .navbar { background-color: #ffa701; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000000;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1,4em;
    color: #000000;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = ({ sticky }) => (
    <Styles>
        <Navbar className={sticky ? "navbar navbar-sticky" : "navbar"} expand="lg">
            {/*{sticky ? "navbar navbar-sticky" : "navbar"}*/}
            {/*<Navbar.Brand href="/">Tutorial</Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <NavbarBrand><a href='/'><img className='logo' src={logo} /></a></NavbarBrand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-md-auto">
                    <Nav.Item><Nav.Link href="/">|   Home     </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/article">|   Article     </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">|   Contact     </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/connexion">|   Connexion     </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/inscription">|   Inscription     </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/panier">|   Panier     </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
