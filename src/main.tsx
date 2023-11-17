import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import ReactLoading from 'react-loading'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<ReactLoading height='20%' width='20%' />}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
