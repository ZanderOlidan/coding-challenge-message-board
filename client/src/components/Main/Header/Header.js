import React, { Component } from 'react';
import { 
    Navbar,
    NavItem,
    Nav,
    NavDropdown,
    MenuItem
} from "react-bootstrap";
import Redirect from 'react-router-dom/Redirect';


class Header extends Component {
    state = {
        isLogOut : false
    }
    render() {
        const { username } = this.props;
        if (this.state.isLogOut) return <Redirect to="/login" />
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
                            <MenuItem eventKey={1.2} onSelect={
                                () => {
                                    localStorage.removeItem('userToken');
                                    localStorage.removeItem('isLoggedIn');
                                    this.setState({isLogOut: true});
                                }
                            }>
                                Log out
                            </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header