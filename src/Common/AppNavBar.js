import {
  Dropdown,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../holder/fors.png";

export function AppNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5">
            Home
          </Nav.Link>

          {/* <Nav.Link as={Link} to="/register" className="h5">
            Register
          </Nav.Link> */}

          {/* <NavDropdown title="Register" id="basic-nav-dropdown">
            <NavDropdown.Item href="/register">User</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/orgregister">
              Organization
            </NavDropdown.Item>
          </NavDropdown> */}

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Register
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item as={Link} to="/register" active>
                User
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/orgregister">
                Organization{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link as={Link} to="/about-us" className="h5">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="h5 btn btn-primary">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// export function UserNavBar() {
//   return (
//     <Navbar bg="dark" expand="lg" variant="dark">
//       <Navbar.Brand as={Link} to="/">
//         VRS APP
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/vehiclebookinglist">
//             Booking Details
//           </Nav.Link>
//           <Nav.Link as={Link} to="/vehiclebooking">
//             Book Vehicles
//           </Nav.Link>
//           <Nav.Link as={Link} to="/user">
//             User
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
