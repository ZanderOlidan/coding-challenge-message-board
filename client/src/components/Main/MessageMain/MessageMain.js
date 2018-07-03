import React, { Fragment } from 'react';
import CreateMessage from './CreateMessage/CreateMessage';
import {
    ListGroup
} from 'react-bootstrap';
import './MessageMain.css';
import MessageEntry from './MessageEntry/MessageEntry';


const store = [
    {
        "user": [
            {
                "_id": "5b390db9d5f8880151fb0485",
                "firstName": "Zanana",
                "lastName": "Molala",
                "username": "akin",
                "createdAt": "2018-07-01T17:22:02.279Z",
                "updatedAt": "2018-07-01T17:22:02.279Z",
                "__v": 0
            }
        ],
        "_id": "5b3a8b835f2af7075afb0334",
        "content": "TAKEMETOYOURHEART!",
        "createdAt": "2018-07-02T20:30:59.064Z",
        "updatedAt": "2018-07-02T20:30:59.064Z",
        "__v": 0
    },
    {
        "user": [
            {
                "_id": "5b390db9d5f8880151fb0485",
                "firstName": "Zanana",
                "lastName": "Molala",
                "username": "akin",
                "createdAt": "2018-07-01T17:22:02.279Z",
                "updatedAt": "2018-07-01T17:22:02.279Z",
                "__v": 0
            }
        ],
        "_id": "5b3a8b985f2af7075afb0335",
        "content": "NEW NEEEEEW Woweurwoweoow wo",
        "createdAt": "2018-07-02T20:31:20.727Z",
        "updatedAt": "2018-07-02T20:31:20.727Z",
        "__v": 0
    }
]
const MessageMain = () => {
    return (
        <div className="messageMain">
            <CreateMessage />
            {store.map( messagePost => {
                return (
                    <MessageEntry 
                        key={messagePost._id}
                        user={messagePost.user[0]} 
                        content={messagePost.content}
                        postDate={messagePost.createdAt}
                    />
                )
            })}
        </div>
    )
}

export default MessageMain