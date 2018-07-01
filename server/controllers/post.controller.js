import Post from '../models/post';
import User from '../models/user';
import validator from 'validator';

let PostCtrl = {};


PostCtrl.index = async (req, res) => {
    // Set defaults when no query/params are set
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
        await Post.find()
            .limit(limitEntries)
            .sort(sortOption(sortBy, orderBy))
            .skip(offsetEntries)
            .populate('user')
    )
}

PostCtrl.create = async (req, res) => {
    await User.findById(req.body.user, (err, poster) => {
        if (err) res.status(500).send(err);
        
        const post = new Post({
            message: validator.escape(req.body.message),
            user: poster._id
        });

        post.save((err, createdPost) => {
            if (err) return res.send(err);

            res.send(createdPost);
        })

    })
}

PostCtrl.update = async (req, res) => {

}

export default PostCtrl