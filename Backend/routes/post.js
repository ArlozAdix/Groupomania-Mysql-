const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const post = require('../controllers/post');

router.get('/getAll', post.getAll);
router.get('/getOne/:id', post.getOne);
router.post('/createOne', multer, post.createOne);
router.put('/updateOne/:id', post.updateOne);
router.delete('/deleteOne/:id', post.deleteOne);
router.post('/:id/like', post.likePost);

module.exports = router;