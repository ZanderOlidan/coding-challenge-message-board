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

    handlePostSubmit = (e) => {
        e.preventDefault();
        const helper = this.props.helper;
        helper.post('/messages', {
            user: helper.getClaim().id,
            content: this.state.messageContent
        })
        .then(data => {
            // New post added on store on parent
            // Store to the store 
            helper.get('/messages/'+data._id)
            .then(post => {
                this.props.newPost(post)
            })
        })
        
        this.setState({messageContent: ''})

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
                                <Button 
                                    type="submit" 
                                    bsSize="large"
                                    onClick={this.handlePostSubmit}
                                >
                                    Post
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CreateMessage