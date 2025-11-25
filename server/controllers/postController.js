const { validationResult } = require('express-validator');
const Post = require('../models/Post');

exports.getAll = async (req, res, next) => {
  try {
    const { page=1, limit=10, q, category } = req.query;
    const filter = {};
    if (q) filter.$or = [{ title: new RegExp(q, 'i') }, { content: new RegExp(q, 'i') }];
    if (category) filter.category = category;
    const posts = await Post.find(filter)
      .sort({ createdAt: -1 })
      .skip((page-1)*limit)
      .limit(parseInt(limit))
      .populate('category');
    const total = await Post.countDocuments(filter);
    res.json({ success: true, data: posts, total });
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) return res.status(404).json({ success:false, error:'Post not found' });
    res.json({ success: true, data: post });
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success:false, errors: errors.array() });
    const post = new Post(req.body);
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success:false, errors: errors.array() });
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators:true });
    if (!post) return res.status(404).json({ success:false, error:'Post not found' });
    res.json({ success:true, data: post });
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ success:false, error:'Post not found' });
    res.json({ success:true, data: post });
  } catch (err) { next(err); }
};
