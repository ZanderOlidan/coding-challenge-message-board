import React from 'react';
import { 
    Navbar,
    NavItem,
    Nav,
    NavDropdown,
    MenuItem
} from "react-bootstrap";

const Header = ({username}) => {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">MessageBoard</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/about">About</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title={username} id="userMenu">
                        <MenuItem eventKey={1.1}>Profile</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2}>Log out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header