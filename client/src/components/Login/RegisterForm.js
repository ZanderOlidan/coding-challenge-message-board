import React, { Fragment } from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    Button,
} from 'react-bootstrap';

const RegisterForm = ({
    username, 
    password, 
    firstName,
    lastName,
    onFieldChange, 
    onSubmit, 
    onLoginForm
}) => {
    return (
        <Fragment>
            <h1>Join us!</h1>
            <Form horizontal>
                <FormGroup 
                    controlId="formFirstName"
                >
                    <Col componentClass={ControlLabel} sm={2}>
                        First Name
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="text" 
                            value={firstName}
                            name="firstName"
                            onChange={onFieldChange} />
                    </Col>
                </FormGroup>
                <FormGroup 
                    controlId="formLastName"
                >
                    <Col componentClass={ControlLabel} sm={2}>
                        Last Name
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="text" 
                            value={lastName}
                            name="lastName"
                            onChange={onFieldChange} />
                    </Col>
                </FormGroup>
                <FormGroup 
                    controlId="formUsername"
                >
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="text" 
                            value={username}
                            name="username"
                            onChange={onFieldChange} />
                    </Col>
                </FormGroup>
                <FormGroup
                    controlId="formPassword"
                >
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="password" 
                            value={password}
                            name="password"
                            onChange={onFieldChange}
                            />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" bsStyle="primary" onClick={onSubmit}>Register</Button>
                        <br />
                        <Button bsStyle="link" onClick={onLoginForm}>&lt; Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Fragment>
    )
}

export default RegisterForm;