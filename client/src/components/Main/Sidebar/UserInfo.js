import React, { Component } from 'react';
import {
    Panel
} from 'react-bootstrap';

class UserInfo extends Component {
    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h2">zanderuu</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Zander Olidan</Panel.Body>
            </Panel>
        )
    }
}

export default UserInfo