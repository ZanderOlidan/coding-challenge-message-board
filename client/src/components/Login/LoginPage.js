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


const domain = "http://localhost:5000/api";
class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        isValidInput: true,
        redirect: false
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

    render() {
        if (this.state.redirect) return <Redirect to="/" exact />
        return (
            <div className="loginPage">
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} className="loginForm">
                        <Jumbotron>
                            <h1>Hey there!</h1>
                            <br />
                            { 
                                this.state.isValidInput ? 
                                "" :
                                <p>Username or password is incorrect</p>
                            }
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

export default withRouter(LoginPage)