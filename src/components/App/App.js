import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import './App.css'

import Header from '../Header/Header'
import AddRecipeButton from '../AddRecipeButton/AddRecipeButton'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import PageNotFound from '../../routes/PageNotFound/PageNotFound'

import Cookbook from '../../routes/Cookbook/Cookbook'
import RecipePage from '../../routes/RecipePage/RecipePage'
import FolderPage from '../../routes/FolderPage/FolderPage'
import AddRecipe from '../../routes/AddRecipe/AddRecipe'

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <AddRecipeButton />

        <Section className="cookbook">
          <Section className="sidebar browser-nav">
            <Sidebar />
          </Section>
          <Section className="sidebar mobile-nav">
            <Sidebar />
          </Section>
          <Section className="recipe-list">
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
          </Section>
        </Section>

        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App