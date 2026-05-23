# react-azure-devops

A React application scaffolded for an Azure DevOps CI/CD learning path.

## What this project teaches

- Azure DevOps Pipelines for React apps
- Build, test, and artifact publishing
- Dev and Production environments
- Approval gates and secure deployment flow
- Environment variables and secrets management
- Branch strategy for feature delivery and production releases
- Azure App Service deployment

## Local setup

1. `cd react-azure-devops`
2. `npm install`
3. `npm run dev`

## Environment variables

- `VITE_API_URL` is read from `import.meta.env.VITE_API_URL`
- Use `.env.example` as a starter for local development
- For Azure DevOps, store secrets in pipeline variable groups or secure variables

## Azure DevOps pipeline

The pipeline file `azure-pipelines.yml` includes:

- build stage for Node and Vite
- deploy stage for `dev` environment
- production deploy stage with gated approvals
- branch filters for `main`, `develop`, `feature/*`, and `release/*`

## Azure App Service guidance

- Configure App Service application settings with the same `VITE_API_URL` key
- Use Azure DevOps environment secrets for secure app settings
- Deploy front-end build output from the pipeline artifact
