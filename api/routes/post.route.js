const express = require('express')
const router = express.Router()
const Post = require('../models/post')

//Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message: err})
    }
})

//Create new post
router.post('/', (req, res) => {
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({success: false, message: err})
        })
})

//Get Post by Id
router.get('/:postId', (req, res) => {
    console.log(req.params.postId)
})

module.exports = router