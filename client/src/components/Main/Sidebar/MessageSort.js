import React, { Component } from 'react';
import { Panel, ControlLabel, FormControl, FormGroup, Form } from 'react-bootstrap';

class MessageSort extends Component {
    render () {
        return (
            <Panel>
                <Panel.Body>
                    <Form inline>
                        <FormGroup controlId="formSortOrder">
                            <ControlLabel>Sort by </ControlLabel>
                            <FormControl componentClass="select">
                                <option value="new">new</option>
                                <option value="votes">highest votes</option>
                            </FormControl>
                        </FormGroup>
                    </Form>
                </Panel.Body>
            </Panel>
        )
    }
}

export default MessageSort