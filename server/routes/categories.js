const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { body } = require('express-validator');

router.get('/', categoryController.getAll);
router.post('/', [ body('name').notEmpty().withMessage('Name is required') ], categoryController.create);

module.exports = router;
