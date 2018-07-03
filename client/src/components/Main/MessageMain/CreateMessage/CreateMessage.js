import React, { Component } from 'react';
import { 
    Form,
    FormGroup, 
    FormControl, 
    InputGroup,
    Button
} from 'react-bootstrap';
import './CreateMessage.css';

class CreateMessage extends Component {
    state = {
        messageContent: ''
    }

    handleInputChange = (e) => {
        e.preventDefault();

        this.setState({messageContent : e.target.value});
    }

    render() {
        return (
            <div className="createNewPost">
                <Form>
                    <FormGroup
                        controlId="formMessageInput"
                        bsSize="large"
                    >
                        <InputGroup>
                            <FormControl
                                type="text"
                                value={this.state.messageContent}
                                placeholder="What's on your mind?"
                                onChange={this.handleInputChange}
                            />
                            <InputGroup.Button>
                                <Button bsSize="large">Post</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CreateMessage