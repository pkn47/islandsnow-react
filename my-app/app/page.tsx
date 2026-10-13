"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  Cart,
} from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto flex-row">
        <Nav.Link href="#"><Facebook /></Nav.Link>
        <Nav.Link href="#"><Twitter /></Nav.Link>
        <Nav.Link href="#"><Pinterest /></Nav.Link>
        <Nav.Link href="#"><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end flex-row">
        <Nav.Link href="#"><HouseFill /></Nav.Link>
        <Nav.Link href="#"><Search /></Nav.Link>
        <Nav.Link href="#"><PersonFill /></Nav.Link>
        <NavDropdown title={<Cart />} align="end">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

const IslandSnowLogo = () => (
  <div className="text-center my-4">
    <Image src="/experience-islandsnow-bootstrap-logo.png" alt="Island Snow logo" fluid />
  </div>
);

const MiddleMenu = () => (
  <Navbar expand="lg">
    <Container>
      <Nav className="mx-auto flex-row">
        <NavDropdown title="MEN" className="mx-2">
          <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
          <NavDropdown.Item href="#">Shorts</NavDropdown.Item>
          <NavDropdown.Item href="#">Hats</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="WOMEN" className="mx-2">
          <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
          <NavDropdown.Item href="#">Dresses</NavDropdown.Item>
          <NavDropdown.Item href="#">Hats</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="KIDS" className="mx-2">
          <NavDropdown.Item href="#">Boys</NavDropdown.Item>
          <NavDropdown.Item href="#">Girls</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="BRANDS" className="mx-2">
          <NavDropdown.Item href="#">Island Snow</NavDropdown.Item>
          <NavDropdown.Item href="#">Partners</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" className="mx-2">SEARCH</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const FullWidthImage = () => (
  <Image src="/experience-islandsnow-bootstrap-main.png" alt="Island Snow" fluid className="w-100" />
);

const FooterMenu = () => (
  <footer className="bg-dark text-white py-5 px-4">
    <Row>
      <Col md={4}>
        <h6 className="text-uppercase pb-3 border-bottom">Navigation</h6>
        <ul className="list-unstyled mt-3">
          <li className="mb-3">About Us</li>
          <li className="mb-3">Employment</li>
          <li className="mb-3">Contact Us</li>
        </ul>
      </Col>
      <Col md={4}>
        <h6 className="text-uppercase pb-3 border-bottom">Main Menu</h6>
        <ul className="list-unstyled mt-3">
          <li className="mb-3">Men</li>
          <li className="mb-3">Women</li>
          <li className="mb-3">Kids</li>
          <li className="mb-3">Brands</li>
        </ul>
      </Col>
      <Col md={4}>
        <h6 className="text-uppercase pb-3 border-bottom">Connect</h6>
        <p className="mt-3">Sign up for the latest updates</p>
        <Form className="d-flex">
          <Form.Control type="email" placeholder="Enter Email Address" className="me-2" />
          <Button variant="dark">Join</Button>
        </Form>
      </Col>
    </Row>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Container>
        <TopMenu />
        <IslandSnowLogo />
        <MiddleMenu />
        <FullWidthImage />
        <FooterMenu />
      </Container>
    </main>
  );
}