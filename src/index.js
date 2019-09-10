import React from 'react'
import ReactDOM from 'react-dom'
// import serviceWorker from './serviceWorker'
import App from './App'
import './index.css'
import RecipeProvider from './contexts/RecipeProvider'

ReactDOM.render(
  <RecipeProvider>
    <App />
  </RecipeProvider>,
  document.getElementById('root')
)

// serviceWorker.unregister()