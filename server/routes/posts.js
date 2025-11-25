const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { body } = require('express-validator');

const postValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
];

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/', postValidation, postController.create);
router.put('/:id', postValidation, postController.update);
router.delete('/:id', postController.remove);

module.exports = router;
