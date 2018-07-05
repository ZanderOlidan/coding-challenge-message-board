import React, {  Component } from 'react';
import CreateMessage from './CreateMessage/CreateMessage';
import './MessageMain.css';
import MessageEntry from './MessageEntry/MessageEntry';


class MessageMain extends Component {

    render () {
        return (
            <div className="messageMain">
                <CreateMessage 
                    helper={this.props.helper}
                    newPost={this.props.addPost}
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