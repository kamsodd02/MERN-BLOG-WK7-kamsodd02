# Deploying Backend to Render

This guide will help you deploy your Express.js backend to Render.

## Prerequisites

- Render account (free tier available)
- GitHub repository with your code
- MongoDB Atlas cluster set up

## Step 1: Connect GitHub Repository

1. Go to [Render](https://render.com)
2. Sign up or log in
3. Click "New" → "Web Service"
4. Connect your GitHub account
5. Select your repository

## Step 2: Configure Build Settings

### Option A: Manual Configuration

- **Name**: `mern-blog-api` (or your preferred name)
- **Environment**: `Node`
- **Build Command**: `cd server && npm install`
- **Start Command**: `cd server && npm start`

### Option B: Using render.yaml

If you have the `render.yaml` file in your repository root:

1. Render will automatically detect and use the configuration
2. You can still override settings if needed

## Step 3: Configure Environment Variables

Add the following environment variables in the Render dashboard:

- `NODE_ENV`: `production`
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `PORT`: `10000` (Render will set this automatically, but you can override)
- `LOG_LEVEL`: `info`

## Step 4: Deploy

1. Click "Create Web Service"
2. Wait for the build and deployment to complete
3. Once deployed, you'll get a URL like: `https://mern-blog-api.onrender.com`

## Step 5: Verify Deployment

1. Check the logs in Render dashboard
2. Test your API endpoints
3. Verify database connection

## Step 6: Set Up Custom Domain (Optional)

1. In your Render service settings
2. Go to "Settings" → "Custom Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Step 7: Enable HTTPS

Render automatically provides HTTPS certificates for all services.

## Monitoring and Logs

- View real-time logs in the Render dashboard
- Set up health checks
- Monitor response times and error rates

## Troubleshooting

**Build Failures:**
- Check that all dependencies are listed in `package.json`
- Verify build commands are correct
- Check logs for specific error messages

**Runtime Errors:**
- Verify environment variables are set correctly
- Check database connectivity
- Review application logs

**Performance Issues:**
- Monitor resource usage in Render dashboard
- Consider upgrading to paid plans for higher limits
- Optimize your code and database queries

## Cost Optimization

- Free tier allows 750 hours/month
- Paid plans start at $7/month for additional resources
- Monitor usage to avoid unexpected charges

## Continuous Deployment

Render automatically redeploys when you push to your main branch. You can also:

- Set up staging environments
- Use pull request previews
- Configure manual deployments

## Security Considerations

- Keep environment variables secure
- Regularly update dependencies
- Monitor for security vulnerabilities
- Use Render's built-in security features