import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export function Layout() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container class="d-flex p-2">
            <Navbar.Brand href="/">GitClub</Navbar.Brand>
            <Nav className=" me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </>
  );
}
