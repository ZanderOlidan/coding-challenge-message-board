import React from 'react';
import MessageSort from './MessageSort';

const Sidebar = ({sortBy, setSorting}) => {
    return (
        <div className="sidebar">
            {/* <UserInfo /> */}
            <MessageSort setSorting={setSorting} sortBy={sortBy}/>
        </div>
    )
}

export default Sidebar