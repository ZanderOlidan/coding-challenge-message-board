import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    message: String,
    votes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);

export default Post;