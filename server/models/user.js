import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    username: String
}, {
    timestamps: true
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

export default User
