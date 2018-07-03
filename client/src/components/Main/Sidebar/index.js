import React from 'react';
import UserInfo from './UserInfo';
import MessageSort from './MessageSort';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <UserInfo />
            <MessageSort />
        </div>
    )
}

export default Sidebar