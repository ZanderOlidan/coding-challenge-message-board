import React, { Fragment, Component } from 'react';
import CreateMessage from './CreateMessage/CreateMessage';
import {
    ListGroup
} from 'react-bootstrap';
import './MessageMain.css';
import MessageEntry from './MessageEntry/MessageEntry';


class MessageMain extends Component {

    addPost = (post) => {
        this.setState({store: [post, ...this.state.store]})
    }
    render () {
        return (
            <div className="messageMain">
                <CreateMessage 
                    helper={this.props.helper}
                    newPost={this.addPost}
                />
                {this.props.store.map( messagePost => {
                    return (
                        <MessageEntry 
                            key={messagePost._id}
                            user={messagePost.user[0]} 
                            content={messagePost.content}
                            postDate={messagePost.createdAt}
                            messageId={messagePost._id}
                            helper={this.props.helper}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MessageMain