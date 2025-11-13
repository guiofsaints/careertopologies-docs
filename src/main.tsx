import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="sky" grayColor="gray" radius="large" scaling="110%">
      <App />
    </Theme>
  </React.StrictMode>,
)
