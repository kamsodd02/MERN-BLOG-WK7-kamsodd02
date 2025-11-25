const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  content: { type: String, required: true },
  featuredImage: { type: String, default: '' },
  slug: { type: String, unique: true },
  excerpt: { type: String },
  author: { type: String, default: 'Anonymous' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  tags: [String],
  isPublished: { type: Boolean, default: true },
  viewCount: { type: Number, default: 0 },
}, { timestamps: true });

PostSchema.pre('save', function(next){
  if (!this.isModified('title')) return next();
  this.slug = this.title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
  next();
});

module.exports = mongoose.model('Post', PostSchema);
