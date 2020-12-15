import React from "react";
import { NavbarBrand, Nav, Navbar, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthContainer from "../HOC/AuthContainer"

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  navar-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {
  return (
    <>
      <Styles>
        <Navbar collapseOn expand="lg" bg="dark" variant="dark">
          <Container>
            <NavbarBrand aria-disabled="false">WebDev Blog</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <AuthContainer />
            </NavbarCollapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}
