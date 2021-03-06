// import logo from './logo.svg';
// import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import ModalSignup from "./Signup";
import ModalLogin from "./Login";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineUserAdd,HiOutlineShoppingCart } from "react-icons/hi";
import { Link,useHistory } from "react-router-dom";

import Logo from "../Images/logo2.png";

function NavBar() {
  const history  = useHistory()

  const [signmodalShow, setsignModalShow] = React.useState(false);
  const [loginmodalShow, setloginModalShow] = React.useState(false);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        style={{ backgroundColor: "#0e0e0f",opacity:0.95 }}
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            style={{ width: "13%"}}
          >
            <img
              src={Logo}
              style={{height:"2em",width:"7em"}}
              className="d-inline-block top-align"
              // alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/memories">Memory</Nav.Link>
              <Nav.Link href="/details">Hardrive</Nav.Link>
              <Nav.Link href="/details">SSDs</Nav.Link>
              <Nav.Link href="/details">Graphic Cards</Nav.Link>
              <Nav.Link href="/details">CPU</Nav.Link>
              <Nav.Link href="/details">MotherBoards</Nav.Link>
              <Nav.Link href="/details">Networking</Nav.Link>
              {/* <Nav.Link href="/details">Power Supplies</Nav.Link> */}
              <Nav.Link href="/contact">Contact us</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>


            </Nav>
            <Button
            style={{ marginRight: "1%" }}
            variant="outline-secondary"
            onClick={() => history.push("/cart")}
          >
            <HiOutlineShoppingCart size={20} />
          </Button>
            <Button
            style={{ marginRight: "1%" }}
            variant="outline-secondary"
            onClick={() => setsignModalShow(true)}
          >
            <HiOutlineUserAdd size={20} />
          </Button>
          <ModalSignup
            show={signmodalShow}
            onHide={() => setsignModalShow(false)}
          />
          <Button
            variant="outline-secondary"
            onClick={() => setloginModalShow(true)}
          >
            <BiLogIn size={20} />
          </Button>
          <ModalLogin
            show={loginmodalShow}
            onHide={() => setloginModalShow(false)}
          />
        
  
          </Navbar.Collapse>

          
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
