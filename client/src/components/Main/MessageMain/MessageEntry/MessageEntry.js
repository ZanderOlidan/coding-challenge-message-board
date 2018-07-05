import React from 'react';
import './MessageEntry.css';
import Votes from './Votes/Votes';

const MessageEntry = ({user, content, postDate, messageId, helper}) => {
    return (
        <div className="messageEntry">
            <h3>{`${user.firstName} ${user.lastName}`} - <em>{user.username}</em></h3>
            <p>{content}<br /><em>{new Date(postDate).toISOString().split('T')[0]}</em></p>
            <Votes messageId={messageId} helper={helper}/>
        </div>
    )
}

export default MessageEntry