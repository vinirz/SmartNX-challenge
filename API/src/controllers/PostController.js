const Post = require('../models/Post')

module.exports = {
    async create(req, res){
        const { title, content } = req.body
        const post = await Post.create({title, content})

        const response = {
            ...post.dataValues,
            _links: {
                self_url: `${req.protocol}://${req.get('host')}/post?id=${post.id}`,
                comment_url: `${req.protocol}://${req.get('host')}/post/${post.id}/comment`
            }
        }

        return res.json(response)
    },

    async listAll(req, res){
        const posts = await Post.findAll({include: ['comments']})
        const response = []

        posts.forEach(data => {
            response.push({
                ...data.dataValues, 
                _links: {
                    self_url: `${req.protocol}://${req.get('host')}/post?id=${data.id}`,
                    comment_url: `${req.protocol}://${req.get('host')}/post/${data.id}/comment`
                }
            })
        })

        return res.json(response)
    },

    async findById(req, res){
        const post = await Post.findByPk(req.query.id, {include: ['comments']})
        
        if(!post){
            return res.status(400).json({error: 'Comment not found'})
        }

        return res.json(post)
    },  

    async update(req, res){
        const post = await Post.findByPk(req.query.id)

        if(!post){
            return res.status(400).json({error: 'Comment not found'})
        }

        const newInfos = req.body
        post.update(newInfos)

        return res.json(post)
    },

    async deleteById(req, res){
        const post = await Post.findByPk(req.query.id)

        if(!post){
            return res.status(400).json({error: 'Post not found'})
        }

        post.destroy()

        return res.status(200).json({message: 'Post successfully removed!'})
    }
}