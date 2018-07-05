import React, { Component } from 'react';
import { 
    Grid,
    Row,
    Col,
    Jumbotron} from 'react-bootstrap';
import './LoginPage.css';
import LoginForm from './LoginForm';
import {withRouter} from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import RegisterForm from './RegisterForm';


const domain = "http://localhost:5000/api";
class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName:'',
        isValidInput: true,
        redirect: false,
        register: false,
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    componentWillMount = () => {
        if (localStorage.getItem('userToken')) {
            this.props.history.push('/');
        }
    }

    handleSignIn = (e) => {
        e.preventDefault();

        fetch(`${domain}/auth/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => {
           if (response.status === 200) {
               return response.json();
           } else {
               this.setState({ isValidInput: false})
           }
        })
        .then(data => {
            localStorage.setItem('userToken', data.token);
            localStorage.setItem('isLoggedIn', true);
            console.log(data.token);
            this.setState({redirect : true})
        })
        .catch(err => console.log(err))
    }

    handleRegisterForm = () => {
        this.setState({username: '', password: ''})
        this.setState({register: !this.state.register})
    }

    handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (!this.state.username || 
            !this.state.password 
        ) {
            this.setState({isValidInput: false})
            return;
        }
        fetch(`${domain}/auth/register`, {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
        .then(response => {
            return {
                status: response.status, 
                body: response.json()
            }
        })
        .then(data => {
            if (data.status ===200) {
                this.setState({register: false})
            }
        })
    }
    render() {
        if (this.state.redirect) return <Redirect to="/" exact />
        return (
            <div className="loginPage">
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} className="loginForm">
                        <Jumbotron>
                            { 
                                this.state.isValidInput ? 
                                "" :
                                <p>Input is incorrect. Try again</p>
                            }
                            {
                                this.state.register ?
                                <RegisterForm 
                                    username={this.state.username}
                                    password={this.state.password}
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    confirmPassword={this.state.confirmPassword}
                                    onSubmit={this.handleRegisterSubmit}
                                    onFieldChange={this.handleInputChange}
                                    onLoginForm={this.handleRegisterForm}
                                />
                                :<LoginForm 
                                    username={this.state.username} 
                                    password={this.state.password} 
                                    onSubmit={this.handleSignIn}
                                    onFieldChange={this.handleInputChange}
                                    onRegisterForm={this.handleRegisterForm}
                                />
                            }
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    }
}

export default withRouter(LoginPage)