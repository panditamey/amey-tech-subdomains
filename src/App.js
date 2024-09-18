import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Claim Your Subdomain</h1>
        <p>Want to claim a subdomain under ameyp.tech?</p>
        <ul>
          <li>Fork our GitHub repository.</li>
          <li>
            Submit a pull request with your desired subdomain and target URL.
          </li>
          <li>We'll review and add your subdomain automatically!</li>
        </ul>
        <a
          href="https://github.com/your-username/ameyp-tech-subdomains"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to GitHub Repository
        </a>
      </header>
    </div>
  );
}

export default App;
