import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Section } from './components/Utils/Utils'
import './App.css'

import Header from './components/Header/Header'
import AddRecipeButton from './components/AddRecipeButton/AddRecipeButton'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import PageNotFound from './routes/PageNotFound/PageNotFound'

import Cookbook from './routes/Cookbook/Cookbook'
import RecipePage from './routes/RecipePage/RecipePage'
import FolderPage from './routes/FolderPage/FolderPage'
import AddRecipe from './routes/AddRecipe/AddRecipe'

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Section className="cookbook">
          <Section className="sidebar">
            <Sidebar />
          </Section>
          <Section className="recipe-list">

          <Header />
          <AddRecipeButton />

            <Switch>
              <Route
                exact path={'/'}
                component={Cookbook} />
              
              <Route
                path={'/recipe/:recipeId'}
                render={routeProps => <RecipePage {...routeProps} />} />
            
              <Route
                path={'/folder/:folderId'}
                render={routeProps => <FolderPage {...routeProps} />} />
              
              <Route
                path={'/add-recipe'}
                render={routeProps => <AddRecipe {...routeProps} />} />
              
              <Route component={PageNotFound} />
            </Switch>

            <Footer />

          </Section>
        </Section>
      </main>
    </BrowserRouter>
  )
}

export default App