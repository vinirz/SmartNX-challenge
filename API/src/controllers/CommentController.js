const Post = require("../models/Post")
const Comment = require("../models/Comment")

module.exports = {
    async create(req, res){
        const { post_id } = req.params
        const { content } = req.body

        const post = await Post.findByPk(post_id)

        if(!post){
            return res.status(400).json({error: 'Post not found'})
        }

        const comment = await Comment.create({
            content,
            post_id
        })

        const response = {
            ...comment.dataValues,
            _links: {
                post_url: `${req.protocol}://${req.get('host')}/post?id=${post_id}`
            }
        }

        return res.json(response)
    },

    async deleteById(req, res){
        const comment = await Comment.findByPk(req.query.id)

        if(!comment){
            return res.status(400).json({error: 'Comment not found'})
        }
        
        comment.destroy()

        return res.status(200).json({message: 'Comment successfully removed!'})
    }
}