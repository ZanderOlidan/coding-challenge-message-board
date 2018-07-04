import Message from '../models/message';
import User from '../models/user';
import MessageVote from '../models/messageVote';
import validator from 'validator';

let MessageCtrl = {};

MessageCtrl.index = async (req, res) => {
    // Set defaults when no query/params are set
    // ?sort_by=votes||new&order=asc||desc
    const defaults = {
        sort: 'votes', //
        order: 'desc',  // values can be asc
        limit: 20,      // avoid loading ALL entries (overload)
        offset: 0
    }
    const sortBy = req.query.sort_by || defaults.sort;
    const orderBy = req.query.order || defaults.order;
    const limitEntries = parseInt(req.query.limit) || defaults.limit;
    const offsetEntries = parseInt(req.query.offset) || defaults.offset;

    const sortOption = (col, order) => {
        const defs = {
            orderBy: {
                desc: -1,
                asc: 1
            },
            column: {
                votes: 'votes',
                date: 'updatedAt' // which attribute in db
            }
        }

        const ret = {};
        ret[defs.column[col]] =  defs.orderBy[order];
        return ret
    }

    res.send(
        await Message.find()
            .limit(limitEntries)
            .sort(sortOption(sortBy, orderBy))
            .skip(offsetEntries)
            .populate('user')
    )
}

MessageCtrl.create = async (req, res) => {
    console.log(req.body);
    await User.findById(req.body.user, (err, poster) => {
        if (err) res.status(500).send(err);
        
        if (!poster) {
            console.log("Error somewhere. User is not found")
            return res.send("User not found")
        }
        const message = new Message({
            // content: validator.escape(req.body.content),
            content: req.body.content,
            user: poster._id
        });

        message.save((err, createdMessage) => {
            if (err) return res.send(err);

            res.send(createdMessage);
        })

    })
}

/**
 * Get a single post
 * @param {*} req 
 * @param {*} res 
 */
MessageCtrl.single_get = async (req, res) => {
    const messageId = req.params.messageId;
    console.log(messageId);
    await Message.findById(messageId)
    .populate('user')
    .exec( (err, message) => {
        if (err) {
            console.log(err); 
            return res.send(err);
        }
        res.send(message);
    })
}

/**
 * voteFlag
 *   1  upvote
 *  -1  downvote
 * @param {*} req 
 * @param {*} res 
 */
MessageCtrl.vote_post = async (req, res) => {
    const messageId = req.params.messageId;
    const userId = req.body.userId;
    const voteFlag = req.body.voteFlag;
    const messageVote = new MessageVote({
        messageId,
        userId,
        voteFlag 
    });

    await MessageVote
            .deleteOne({userId})
            .exec((err, voteObj) => {
                if (err) res.status(500).send("Can't update")
                messageVote.save((err, vote) => {
                    if (err) return res.status(500).send("Can't save");

                    res.send(vote);
                })
            })

}

MessageCtrl.votes_get = async (req,res) => {
    const messageId = req.params.messageId;

    // Count upvotes
    await MessageVote
            .count({
                messageId, 
                voteFlag : 1
            })
            .exec((err, upCount) => {

                // Count downvotes
                MessageVote
                        .count({
                            messageId, 
                            voteFlag : -1
                        })
                        .exec((err, downCount) => {

                            res.send({votes: (upCount || 0) - (downCount || 0)});
                        })
            })
}

MessageCtrl.votes_delete = async (req,res) => {
    const userId = req.body.userId;
    await MessageVote
            .deleteOne({userId})
            .exec((err, voteObj) => {
                res.send(voteObj);
            })
}

MessageCtrl.votes_user_get = async (req,res) => {
    const messageId = req.params.messageId;
    const userId = req.params.userId;

    await MessageVote
            .findOne({"messageId": messageId,"userId": userId})
            .exec( (err, vote) => {
                if (err) res.send(err);

                if (!vote) res.send({voteFlag: 0});
                if (vote) res.send({voteFlag: vote.voteFlag});
            })
}
MessageCtrl.update = async (req, res) => {

}

export default MessageCtrl