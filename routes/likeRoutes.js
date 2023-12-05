const express = require('express')
const auth = require('../middleware/auth')
const { createPostLike, createCommentLike, getLikeById, deleteLike } = require('../controllers/likeController')
const likeRouter = express.Router()

// POST/CREATE
likeRouter.post('/:post_id/create', auth, createPostLike)
likeRouter.post('/:comment_id/create', auth, createCommentLike)

// GET
likeRouter.get('/:like_id', getLikeById)

// DELETE
likeRouter.delete('/:like_id/delete', auth, deleteLike)

module.exports = likeRouter
