import React, { Component } from 'react';
import { 
    Grid,
    Row,
    Col,
    Jumbotron} from 'react-bootstrap';
import './LoginPage.css';
import LoginForm from './LoginForm';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSignIn = (e) => {
        e.preventDefault();

        fetch()
    }

    render() {
        return (
            <div className="loginPage">
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} className="loginForm">
                        <Jumbotron>
                            <h1>Hey there!</h1>
                            <br />
                            <LoginForm 
                                username={this.state.username} 
                                password={this.state.password} 
                                onSubmit={this.handleSignIn}
                                onFieldChange={this.handleInputChange}
                                // onRegister={this.handleRegister}
                            />
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    }
}

export default Login