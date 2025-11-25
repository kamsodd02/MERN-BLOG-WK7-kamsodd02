# MongoDB Atlas Setup Guide

This guide will help you set up a MongoDB Atlas cluster for production deployment of your MERN blog application.

## Prerequisites

- MongoDB Atlas account (free tier available)
- Your application code ready for deployment

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" or "Sign Up"
3. Complete the registration process

## Step 2: Create a New Cluster

1. After logging in, click "Create" to create a new cluster
2. Choose the **FREE** tier (M0 Sandbox)
3. Select your preferred cloud provider and region (choose one close to your users)
4. Name your cluster (e.g., `mern-blog-cluster`)
5. Click "Create Cluster"

## Step 3: Set Up Database Access

1. In the left sidebar, click "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication method
4. Enter a username (e.g., `mernbloguser`)
5. Enter a strong password
6. Under "Database User Privileges", select "Read and write to any database"
7. Click "Add User"

## Step 4: Configure Network Access

1. In the left sidebar, click "Network Access"
2. Click "Add IP Address"
3. For development, you can add `0.0.0.0/0` to allow access from anywhere
4. For production, add your specific IP addresses or use cloud provider's IP ranges
5. Click "Confirm"

## Step 5: Get Connection String

1. In the left sidebar, click "Clusters"
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<database>` with your desired database name (e.g., `mern_blog_prod`)

## Step 6: Update Environment Variables

In your `.env` file, update the `MONGODB_URI`:

```env
MONGODB_URI=mongodb+srv://mernbloguser:yourpassword@mern-blog-cluster.xxxxx.mongodb.net/mern_blog_prod?retryWrites=true&w=majority
```

## Step 7: Test Connection

1. Start your application
2. Check the logs to ensure successful connection to MongoDB Atlas
3. Verify that your application can read/write data

## Security Best Practices

1. **Never commit connection strings to version control**
2. **Use environment variables for sensitive data**
3. **Restrict IP access in production**
4. **Use strong passwords**
5. **Enable database auditing if needed**
6. **Regularly rotate database user credentials**

## Monitoring

- Monitor your cluster usage in the Atlas dashboard
- Set up alerts for connection limits, storage usage, etc.
- Review performance metrics regularly

## Backup and Recovery

- Atlas provides automatic backups for M0 clusters
- For production workloads, consider upgrading to paid tiers with advanced backup features
- Test backup restoration procedures regularly

## Troubleshooting

**Connection Issues:**
- Verify connection string is correct
- Check IP whitelist
- Ensure database user credentials are correct
- Check network connectivity

**Performance Issues:**
- Monitor slow queries in Atlas dashboard
- Consider adding indexes to frequently queried fields
- Review connection pool settings

## Cost Optimization

- Free tier (M0) is suitable for development and small applications
- Monitor usage to avoid unexpected charges
- Consider reserved instances for predictable workloads