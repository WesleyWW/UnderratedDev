const express = require('express')
const router = express.Router()

const Auth = require('./auth.route')
const Post = require('./post.route')

router.use('/', Auth)
router.use('/post', Post)

module.exports = router