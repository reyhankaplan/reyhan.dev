import { ReactElement } from 'react'

import './App.css'

export const App = (): ReactElement => (
  <main>
    <h1>Reyhan Ünal</h1>
    <p>Frontend Developer</p>
    <a href="mailto:me@reyhan.dev" className="email-box">
      me@reyhan.dev
    </a>
    <ul>
      <li>
        <a href="https://github.com/ryhnnl" className="social-link">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ryhnnl" className="social-link">
          LinkedIn
        </a>
      </li>
    </ul>
  </main>
)
