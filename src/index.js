import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { CookbookProvider } from './contexts/CookbookContext'
import { RecipeProvider } from './contexts/RecipeContext'
import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <CookbookProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </CookbookProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()