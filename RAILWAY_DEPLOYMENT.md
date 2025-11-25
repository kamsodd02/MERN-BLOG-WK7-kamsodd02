# Deploying Backend to Railway

This guide will help you deploy your Express.js backend to Railway.

## Prerequisites

- Railway account (free tier available)
- GitHub repository with your code
- MongoDB Atlas cluster set up

## Step 1: Connect GitHub Repository

1. Go to [Railway](https://railway.app)
2. Sign up or log in
3. Click "New Project" → "Deploy from GitHub repo"
4. Connect your GitHub account
5. Select your repository

## Step 2: Configure Build Settings

Railway automatically detects Node.js projects. The `nixpacks.toml` file in your repository configures the build to work with your server code in the `server/` subdirectory:

- **Build Command**: `cd server && npm install`
- **Start Command**: `cd server && npm start`
- **Root Directory**: `/` (repository root)

The nixpacks.toml ensures Railway builds and runs your server correctly from the server directory.

## Step 3: Configure Environment Variables

Add the following environment variables in the Railway dashboard:

- `NODE_ENV`: `production`
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `LOG_LEVEL`: `info`

Railway automatically sets the `PORT` environment variable.

## Step 4: Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete
3. Once deployed, you'll get a URL like: `https://mern-blog-api.up.railway.app`

## Step 5: Verify Deployment

1. Check the logs in Railway dashboard
2. Test your API endpoints
3. Verify database connection

## Step 6: Set Up Custom Domain (Optional)

1. In your Railway service settings
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Monitoring and Logs

- View real-time logs in the Railway dashboard
- Set up health checks
- Monitor response times and error rates

## Troubleshooting

**Build Failures:**
- Check that all dependencies are listed in `package.json`
- Verify the start script is correct
- Check logs for specific error messages

**Runtime Errors:**
- Verify environment variables are set correctly
- Check database connectivity
- Review application logs

**Performance Issues:**
- Monitor resource usage in Railway dashboard
- Consider upgrading plans for higher limits
- Optimize your code and database queries

## Cost Optimization

- Railway offers a generous free tier
- Paid plans provide more resources and features
- Monitor usage to avoid unexpected charges

## Continuous Deployment

Railway automatically redeploys when you push to your main branch. You can also:

- Set up staging environments
- Use pull request deployments
- Configure manual deployments

## Security Considerations

- Keep environment variables secure
- Regularly update dependencies
- Monitor for security vulnerabilities
- Use Railway's built-in security features