import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const messageVote = new Schema({
    userId: [{ 
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    messageId: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    voteFlag: {
        type: Number,
        min: -1,
        max: 1
    }
})

const MessageVote = mongoose.model('MessageVote', messageVote);

export default MessageVote