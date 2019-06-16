import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import serviceWorker from './serviceWorker'
import App from './components/App/App'
import './index.css'
import RecipeProvider from './contexts/RecipeProvider'

ReactDOM.render(
  <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// serviceWorker.unregister()