import { ReactElement } from 'react'

import './App.css'

export const App = (): ReactElement => (
  <main>
    <h1>Reyhan Kaplan</h1>
    <p>Frontend Developer</p>
    <a href="mailto:me@reyhan.dev" className="email-box">
      me@reyhan.dev
    </a>
    <ul>
      <li>
        <a
          href="https://github.com/reyhankaplan"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/reyhankaplan"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </main>
)
