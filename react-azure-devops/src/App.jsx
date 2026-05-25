const apiUrl = import.meta.env.VITE_API_URL ?? "https://api.example.com";

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <h1>react-azure-devops</h1>
        <p>
          Hey Haseeb ! Learn Azure DevOps CI/CD for a React app with Dev and
          Production environments, approvals, environment variables, and secure
          deploys....................
        </p>
      </header>

      <section className="content-card">
        <h2>Deployment details</h2>
        <p>
          This app is built for a real-world Azure DevOps pipeline learning
          path. The pipeline can deploy to Azure App Service using separate
          environments.
        </p>

        <dl>
          <dt>Environment variable</dt>
          <dd>
            <code>VITE_API_URL</code>
          </dd>
          <dt>Resolved API URL</dt>
          <dd>{apiUrl}</dd>
        </dl>
      </section>

      <section className="content-card">
        <h2>Key learning goals</h2>
        <ul>
          <li>CI/CD with Azure DevOps Pipelines</li>
          <li>Dev and Production environment deployments</li>
          <li>Branch strategy and gated approvals</li>
          <li>Secrets management via Azure DevOps and App Service settings</li>
          <li>Feature workflow for safe delivery</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
