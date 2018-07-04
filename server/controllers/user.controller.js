import User from '../models/user';

const UserCtrl = {};

UserCtrl.getUser = async (req, res) => {
    await User.findById(res.params.id, (err, user) => {
        if (err) res.status(404);

        if (user) {
            res.send(user)
        } else {
            res.send("User not found");
        }
    })
}

export default UserCtrl
