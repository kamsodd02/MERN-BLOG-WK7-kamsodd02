# Deployment and Maintenance Procedures

This document outlines the procedures for deploying, maintaining, and troubleshooting your MERN stack blog application.

## Deployment Procedures

### Initial Deployment

#### 1. Environment Setup

**Prerequisites:**
- GitHub repository created and code pushed
- MongoDB Atlas account and cluster created
- Render account created
- Vercel account created

#### 2. Backend Deployment (Render)

1. **Create Render Web Service:**
   - Go to Render Dashboard → New → Web Service
   - Connect GitHub repository
   - Configure build settings:
     - **Environment:** Node
     - **Build Command:** `cd server && npm install`
     - **Start Command:** `cd server && npm start`

2. **Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=your_atlas_connection_string
   PORT=10000
   LOG_LEVEL=info
   SENTRY_DSN=your_sentry_dsn
   ```

3. **Deploy:** Click "Create Web Service"

#### 3. Frontend Deployment (Vercel)

1. **Import Project:**
   - Go to Vercel Dashboard → New Project
   - Import GitHub repository
   - Configure settings:
     - **Framework:** Vite
     - **Root Directory:** `client`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`

2. **Environment Variables:**
   ```
   VITE_API_URL=https://your-render-app.onrender.com/api
   ```

3. **Deploy:** Click "Deploy"

### Continuous Deployment

#### GitHub Actions

**CI Pipeline (.github/workflows/ci.yml):**
- Runs on every push and PR
- Tests backend and frontend
- Runs security scans
- Builds applications

**CD Pipeline (.github/workflows/deploy.yml):**
- Triggers on push to main branch
- Deploys to production
- Can be triggered manually for staging

## Maintenance Procedures

### Regular Maintenance Tasks

#### Weekly Tasks
- [ ] Review application logs for errors
- [ ] Check monitoring dashboards
- [ ] Verify backup status
- [ ] Update dependencies (security patches)

#### Monthly Tasks
- [ ] Review performance metrics
- [ ] Analyze error trends
- [ ] Update monitoring alerts
- [ ] Test backup restoration

#### Quarterly Tasks
- [ ] Security audit
- [ ] Performance optimization
- [ ] Update infrastructure
- [ ] Review access permissions

### Database Maintenance

#### MongoDB Atlas Maintenance

**Backup Verification:**
```bash
# Check backup status in Atlas dashboard
# Verify automated backups are running
# Test backup restoration procedure
```

**Performance Optimization:**
- Monitor slow queries
- Review index usage
- Optimize database schema
- Scale cluster if needed

### Application Updates

#### Backend Updates

1. **Code Changes:**
   - Make changes in feature branch
   - Test locally
   - Create pull request
   - Merge after CI passes

2. **Dependency Updates:**
   ```bash
   cd server
   npm audit
   npm update
   npm test
   ```

3. **Deployment:**
   - Automatic via GitHub Actions
   - Monitor deployment logs
   - Verify health checks

#### Frontend Updates

1. **Code Changes:**
   - Make changes in feature branch
   - Test locally
   - Create pull request
   - Merge after CI passes

2. **Dependency Updates:**
   ```bash
   cd client
   npm audit
   npm update
   npm run build
   ```

3. **Deployment:**
   - Automatic via Vercel
   - Preview deployments for PRs

### Infrastructure Maintenance

#### Render Maintenance

- Monitor resource usage
- Scale instance type if needed
- Update environment variables
- Review build configurations

#### Vercel Maintenance

- Monitor bandwidth usage
- Review function usage
- Update build configurations
- Configure custom domains

## Troubleshooting Guide

### Common Issues

#### Backend Issues

**Application Won't Start:**
- Check environment variables
- Verify database connection
- Review application logs
- Check for port conflicts

**Database Connection Errors:**
- Verify MongoDB Atlas IP whitelist
- Check connection string
- Confirm database user permissions
- Test network connectivity

**High Memory Usage:**
- Monitor for memory leaks
- Review connection pooling
- Scale instance size
- Optimize queries

#### Frontend Issues

**Build Failures:**
- Check for TypeScript errors
- Verify dependency versions
- Review build logs
- Test locally first

**API Connection Issues:**
- Verify API URL configuration
- Check CORS settings
- Test backend availability
- Review network requests

**Performance Issues:**
- Enable code splitting
- Optimize images
- Implement caching
- Use CDN for assets

### Incident Response

#### 1. Alert Response Procedure

1. **Acknowledge Alert:**
   - Confirm alert receipt
   - Assess severity and impact

2. **Investigate:**
   - Check monitoring dashboards
   - Review application logs
   - Test affected functionality
   - Identify root cause

3. **Communicate:**
   - Notify stakeholders if needed
   - Provide status updates
   - Set expectations

4. **Resolve:**
   - Implement fix
   - Test solution
   - Monitor for recurrence

5. **Document:**
   - Record incident details
   - Update runbooks
   - Improve monitoring/alerts

#### 2. Rollback Procedures

**Backend Rollback:**
1. Identify last working commit
2. Deploy previous version via Render
3. Verify application functionality
4. Monitor for issues

**Frontend Rollback:**
1. Use Vercel's deployment history
2. Roll back to previous deployment
3. Clear browser cache if needed
4. Verify functionality

### Monitoring and Alerting

#### Key Metrics to Monitor

**Application Health:**
- Response times (p50, p95, p99)
- Error rates
- Uptime percentage
- Throughput

**Infrastructure Health:**
- CPU usage
- Memory usage
- Disk space
- Network I/O

**Business Metrics:**
- User sessions
- Page views
- API usage
- Error frequency

#### Alert Configuration

**Critical Alerts:**
- Application down
- Database unreachable
- High error rate (>5%)
- Security incidents

**Warning Alerts:**
- High resource usage
- Slow response times
- Unusual traffic patterns

## Backup and Recovery

### Database Backups

**MongoDB Atlas Backups:**
- Automatic daily backups
- Point-in-time recovery
- Cross-region replication
- Backup testing procedures

### Application Backups

**Code Repository:**
- Git version control
- Tagged releases
- Branch protection rules

**Configuration Backups:**
- Environment variables documented
- Infrastructure as code
- Configuration files versioned

### Disaster Recovery

**Recovery Time Objectives (RTO):**
- Backend: 1 hour
- Frontend: 15 minutes
- Database: 4 hours

**Recovery Point Objectives (RPO):**
- Database: 1 hour
- Application code: Real-time (Git)

## Security Maintenance

### Regular Security Tasks

- [ ] Review dependency vulnerabilities
- [ ] Update SSL certificates
- [ ] Rotate access keys
- [ ] Audit user permissions
- [ ] Monitor for suspicious activity

### Security Incident Response

1. **Detection:** Monitor alerts and logs
2. **Assessment:** Evaluate impact and scope
3. **Containment:** Isolate affected systems
4. **Recovery:** Restore from backups
5. **Lessons Learned:** Update security measures

## Performance Optimization

### Application Performance

**Backend Optimization:**
- Database query optimization
- Caching implementation
- Code profiling
- Memory leak detection

**Frontend Optimization:**
- Bundle size analysis
- Image optimization
- Lazy loading implementation
- CDN usage

### Infrastructure Scaling

**Vertical Scaling:**
- Increase instance size
- Add more memory/CPU

**Horizontal Scaling:**
- Load balancer configuration
- Database read replicas
- CDN implementation

## Documentation Updates

- [ ] Update runbooks after changes
- [ ] Document new procedures
- [ ] Review and update contact lists
- [ ] Maintain knowledge base

## Compliance and Auditing

- [ ] Regular security audits
- [ ] Access log reviews
- [ ] Compliance checklist maintenance
- [ ] Third-party vendor reviews