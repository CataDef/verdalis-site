# Deploy

## Vercel Deploy Hook

To trigger a production deployment, run:

```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_X7KXNmSQK2lQolc1DZb3LMeg2ame/F0ifvVUk3n
```

This will trigger a new build and deployment on Vercel from the latest commit on the `main` branch.
