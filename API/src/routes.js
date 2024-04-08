const express = require("express")
const PostController = require("./controllers/PostController")
const CommentController = require("./controllers/CommentController")

const routes = express.Router()

routes.post('/posts', PostController.create)
routes.get('/posts', PostController.listAll)

routes.get('/post', PostController.findById) //?id=
routes.put('/post', PostController.update) //?id=
routes.patch('/post', PostController.update) //?id=
routes.delete('/post', PostController.deleteById) //?id=

routes.post('/post/:post_id/comment', CommentController.create)
routes.delete('/comment', CommentController.deleteById) //?id=

module.exports = routes