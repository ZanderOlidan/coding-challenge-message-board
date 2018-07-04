import React from 'react';
import { 
    Col,
    Form, 
    FormGroup, 
    FormControl, 
    Button, 
    ControlLabel, 
} from 'react-bootstrap';

const LoginForm = ({username, password, onFieldChange, onSubmit}) => {
    return (
        <Form horizontal>
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
                    <Button type="submit" bsStyle="primary" onClick={onSubmit}>Sign in</Button>
                    <br />
                    New to the message board? <Button bsStyle="link">Register</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default LoginForm