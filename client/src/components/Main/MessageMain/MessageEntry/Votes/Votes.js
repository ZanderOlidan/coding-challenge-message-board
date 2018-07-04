import React, { Component } from 'react';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';

class Votes extends Component {
    id = this.props.messageId;
    helper = this.props.helper;
    userId = this.props.helper.getClaim().id;

    state = {
        votes: 0,
        upvoted: false,
        downvoted: false
    }

    componentDidMount() {
        // get total votes of post
        this.helper.get(`/messages/${this.id}/votes`)
            .then(data => this.setState({votes: data.votes}))
        
        // Check if user has voted before
        this.helper.get(`/messages/${this.id}/votes/${this.userId}`)
            .then(data => {
                console.log(data.voteFlag);
                if (data.voteFlag === 1) {
                    this.setState({upvoted: true})
                }

                if (data.voteFlag === -1 ) {
                    this.setState({downvoted: true})
                }
            });
    }

    handleUpvote = () => {
        // If it is upvoted, it shouldnt be able to upvote more
        if (this.state.upvoted) {
            this.helper.delete(`/messages/${this.id}/votes`, {
                userId: this.userId
            })
            this.setState({ 
                votes: this.state.votes - 1,
                upvoted: false 
            })
        } else { // else, upvote normally
            this.helper.post(
                `/messages/${this.id}/votes`, 
                {
                    voteFlag: 1,
                    userId: this.userId
                }
            )
            .then(res => {
                let add = 1;
                // Add 1 if jumping from downvoted to upvoted
                if (this.state.downvoted) {
                    add++;
                }
                return this.setState({
                    votes: this.state.votes + add,
                    upvoted: true,
                    downvoted: false
                })
            });
        }
    }

    handleDownvote = () => {
        if (this.state.downvoted) {
            this.helper.delete(`/messages/${this.id}/votes`, {
                userId: this.userId
            })
            this.setState({ 
                votes: this.state.votes + 1,
                downvoted: false 
            })
        } else {
            this.helper.post(
                `/messages/${this.id}/votes`,
                {
                    voteFlag: -1,
                    userId: this.userId
                }
            )
            .then(res => {
                let add = 1;
                if (this.state.upvoted) {
                    add++;
                }
                return this.setState({
                    votes: this.state.votes - add,
                    upvoted: false,
                    downvoted: true
                })
            })
        }
    }
    render() {
        return (
            <div className="metaVotes">
                <Button bsStyle="primary" onClick={this.handleUpvote} active={this.state.upvoted}>
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                </Button>
                <span className="voteCount">{this.state.votes}</span>
                <Button bsStyle="danger" onClick={this.handleDownvote} active={this.state.downvoted}>
                    <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                </Button>
            </div>
        )
    }
}

export default Votes