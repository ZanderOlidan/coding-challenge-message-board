import React, { Component, } from 'react';
import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap';
import './MainPage.css';
import Header from './Header/Header';
import Sidebar from './Sidebar';
import MessageMain from './MessageMain/MessageMain';
import RequestService from '../Helper/RequestAPI';

const messageCols = 8;
const API = "http://localhost:5000/api"
class MainPage extends Component {
    helper = new RequestService(API, localStorage.getItem('userToken'))
    state = {
        sorting: 'new',
        store: []
    }

    handleSorting = (e) => {
        e.preventDefault()

        const val = e.target.value;
        this.setState({sorting: val});

        this.getMessages(val);
    }

    componentDidMount() {
        this.getMessages(this.state.sorting);
    }

    getMessages = (val) => {
        // ?sort_by=votes||new&order=asc||desc
        const sortDefs = {
            new : '?sort_by=date&order=desc',
            votes: '?sort_by=votes&order=desc'
        }
        return this.helper.get(`/messages${sortDefs[val]}`)
            .then(store => this.setState({store}))
    }

    addPost = (post) => {
        this.setState({store: [post, ...this.state.store]})
    }

    render() {
        const reqHelper = this.helper;
        const userData = reqHelper.getClaim();
        return (
            <div className="mainPage">
                <Header username={userData.username}/>
                <Grid>
                    <Row>
                        <Col sm={12 - messageCols}>
                            <Sidebar helper={reqHelper} setSorting={this.handleSorting} sortBy={this.state.sorting}/>
                        </Col>
                        <Col sm={messageCols}>
                            <MessageMain helper={reqHelper} sort={this.state.sorting} store={this.state.store} addPost={this.addPost}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default MainPage