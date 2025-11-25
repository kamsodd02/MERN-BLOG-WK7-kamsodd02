// (not used separately because validations are inline in routes)
// kept for future extension
const { body } = require('express-validator');
exports.create = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
];
