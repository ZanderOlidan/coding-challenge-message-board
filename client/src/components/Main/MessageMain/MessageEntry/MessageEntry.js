import React from 'react';
import './MessageEntry.css';
import { Button, Glyphicon } from 'react-bootstrap';

const MessageEntry = ({user, content, postDate}) => {
    return (
        <div className="messageEntry">
            <h3>{`${user.firstName} ${user.lastName}`} - <em>{user.username}</em></h3>
            <p>{content}</p>
            <div className="metaVotes">
                <Button bsStyle="link">
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                </Button>
                <span className="voteCount">23</span>
                <Button bsStyle="link">
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                </Button>
            </div>
        </div>
    )
}

export default MessageEntry