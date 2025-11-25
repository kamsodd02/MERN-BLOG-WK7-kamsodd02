const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const logger = require('./config/logger');
require('./config/sentry'); // Initialize Sentry
const postsRoutes = require('./routes/posts');
const categoriesRoutes = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// static uploads (if you add)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/posts', postsRoutes);
app.use('/api/categories', categoriesRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
});

app.get('/', (req, res) => res.send('MERN Blog API running'));

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
  });
}).catch(err => {
  logger.error('Failed to connect to DB', err);
  process.exit(1);
});
