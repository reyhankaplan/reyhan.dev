import { StrictMode } from 'react'
import { render } from 'react-dom'

import '@fontsource/inconsolata'
import '@fontsource/inconsolata/700.css'

import { App } from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
