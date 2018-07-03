import React, { Component, Fragment } from 'react';
import {
    Grid,
    Row,
    Col,
    Panel
} from 'react-bootstrap';
import Header from './Header/Header';
import Sidebar from './Sidebar';
import MessageMain from './MessageMain/MessageMain';

const messageCols = 8;
class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <Header username="zanderu"/>
                <Grid>
                    <Row>
                        <Col sm={12 - messageCols}>
                            <Sidebar />
                        </Col>
                        <Col sm={messageCols}>
                            <MessageMain />
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        )
    }
}

export default MainPage