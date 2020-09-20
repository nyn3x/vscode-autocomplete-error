import React, { ReactElement, ReactNode } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {

  return (
    <>
      <header>
        <Navbar
          expand="lg"
          variant="light"
          bg="light"
          className="mb-3 fixed-top"
          collapseOnSelect
        >
          <Navbar.Brand as={Link} to="/">
            Sample App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/list">
                  list
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/new">
                  add new entry
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main className="flex-shrink-0">
        <Container>{children}</Container>
      </main>
      <footer className="footer mt-auto py-3">
        <Container className="">
          Version: {process.env.REACT_APP_VERSION} / Build:{" "}
          {process.env.REACT_APP_BUILD} / Environment: {process.env.NODE_ENV}
        </Container>
      </footer>
    </>
  );
}
