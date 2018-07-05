import React, {Fragment} from 'react';
import { 
    Col,
    Form, 
    FormGroup, 
    FormControl, 
    Button, 
    ControlLabel, 
} from 'react-bootstrap';

const LoginForm = ({username, password, onFieldChange, onSubmit, onRegisterForm}) => {
    return (
        <Fragment>
            <h1>Hey there!</h1>
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
                        New to the message board? <Button bsStyle="link" onClick={onRegisterForm}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Fragment>
    );
}

export default LoginForm