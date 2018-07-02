import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    content: String
}, {
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema);

export default Message;