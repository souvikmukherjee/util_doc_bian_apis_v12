import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title={`BIAN APIs Documentation`}
      description="Detailed documentation about BIAN APIs">
      <header className="hero-banner">
        <div className="container">
          <h1 className="hero__title">Welcome to BIAN APIs Documentation</h1>
          <p className="hero__subtitle">Detailed information about BIAN APIs</p>
          <div className="buttons">
            <a
              className="button button--primary button--lg"
              href="/util_doc_bian_apis_v12/docs/apis/index">
              Explore APIs
            </a>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <h2>About This Site</h2>
            <p>This site provides detailed documentation about BIAN APIs.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
