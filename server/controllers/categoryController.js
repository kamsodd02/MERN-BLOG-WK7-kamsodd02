const { validationResult } = require('express-validator');
const Category = require('../models/Category');

exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ name:1 });
    res.json({ success:true, data: categories });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success:false, errors: errors.array() });
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ success:true, data: category });
  } catch (err) { next(err); }
};
