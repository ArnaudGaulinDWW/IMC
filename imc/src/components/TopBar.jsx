import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHealing } from "react-icons/gi";
import { LinkContainer } from 'react-router-bootstrap';

function OffcanvasTopBar() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><GiHealing /> Calcul de masse corporel</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  IMC
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="homescreen" activeClassName>
                    <Nav.Link>Calcul</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="about" activeClassName>
                    <Nav.Link>Qui suis-je</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title="Partenaires"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="https://moonshiatsu.com/">
                        <NavDropdown.Item>Moon Shiastu</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="https://samanthaconstantin-dieteticienne.fr/">
                        <NavDropdown.Item>Samantha La nutritioniste</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasTopBar;