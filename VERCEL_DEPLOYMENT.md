# Deploying Frontend to Vercel

This guide will help you deploy your React frontend to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub repository with your code
- Backend API deployed and accessible

## Step 1: Connect GitHub Repository

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your GitHub repository

## Step 2: Configure Build Settings

Vercel should automatically detect your Vite React app, but verify these settings:

- **Framework Preset**: Vite
- **Root Directory**: `client` (or leave empty if client is in root)
- **Build Command**: `npm run build` or `vite build`
- **Output Directory**: `dist` (Vite's default)

## Step 3: Configure Environment Variables

Add the following environment variable in Vercel dashboard:

- `VITE_API_URL`: Your backend API URL (e.g., `https://mern-blog-api.onrender.com/api`)

## Step 4: Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete
3. Once deployed, you'll get a URL like: `https://mern-blog.vercel.app`

## Step 5: Set Up Custom Domain (Optional)

1. In your Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Step 6: Enable HTTPS

Vercel automatically provides HTTPS certificates for all deployments.

## Preview Deployments

Vercel automatically creates preview deployments for pull requests:

- Each PR gets a unique preview URL
- Perfect for testing changes before merging
- Automatic cleanup when PR is closed

## Environment Variables for Different Stages

You can set different environment variables for:

- **Production**: Live site
- **Preview**: Pull request deployments
- **Development**: Local development

## Build Optimization

Vite already provides excellent optimization:

- Code splitting (enabled by default)
- Tree shaking
- Minification
- Asset optimization

## Custom Build Configuration

If you need custom configuration, you can:

1. Add a `vercel.json` file in your project root
2. Configure rewrites, redirects, or headers
3. Set up API routes if needed

## Monitoring and Analytics

- View deployment history and logs
- Monitor performance metrics
- Set up error tracking
- Use Vercel's analytics dashboard

## Troubleshooting

**Build Failures:**
- Check that all dependencies are in `package.json`
- Verify build scripts are correct
- Check for TypeScript or linting errors

**Runtime Errors:**
- Verify environment variables are set correctly
- Check API endpoints are accessible
- Review browser console for errors

**Performance Issues:**
- Enable Vercel's performance monitoring
- Optimize images and assets
- Consider using CDN for static assets

## Cost Optimization

- Hobby plan is free for personal projects
- Pro plan starts at $20/month for teams
- Monitor bandwidth and build minutes usage

## Continuous Deployment

Vercel automatically redeploys when you:

- Push to main branch (production)
- Create pull requests (preview deployments)
- Push to other branches (if configured)

## Security Considerations

- Keep environment variables secure
- Regularly update dependencies
- Use Vercel's security headers
- Enable password protection for staging sites if needed

## Integration with Backend

Since your frontend and backend are separate:

1. Deploy backend first
2. Get the backend URL
3. Set `VITE_API_URL` in Vercel
4. Deploy frontend
5. Test the integration

## CORS Configuration

Ensure your backend allows requests from your Vercel domain:

```javascript
// In your backend CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173', // development
    'https://mern-blog.vercel.app', // production
    /\.vercel\.app$/ // preview deployments
  ],
  credentials: true
};