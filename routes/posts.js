var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts_controller');

// GET /blog/new
router.get('/new', postsController.new);

// GET all posts listings.
// GET /blog/
router.get('/', postsController.index);

// Get an Individual post listing
router.post('/update', postsController.delete);
router.post('/delete', postsController.delete);
// GET /blog/:slug
router.get('/:slug', postsController.show);

// Create posts
// POST /blog


router.post('/', postsController.create);

// TODO: Add Edit and Delete Requests
// Delete a post
//POST /blog
router.post('/' , postContoller.delete)

// Edit a post
//POST /blog
router.post('/' , postController.edit)

router.get('/' , postController.register);

router.get('/' , postController.login)


// Export routes
module.exports = router;
