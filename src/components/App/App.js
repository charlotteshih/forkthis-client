import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import MainBlurb from '../MainBlurb/MainBlurb'
import Footer from '../Footer/Footer'
import PageNotFound from '../../routes/PageNotFound/PageNotFound'

import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'

import Cookbook from '../../routes/Cookbook/Cookbook'
import RecipePage from '../../routes/RecipePage/RecipePage'
import AddRecipe from '../../routes/AddRecipe/AddRecipe'

import folders from '../../dummyData/dummyFolders'
import recipes from '../../dummyData/dummyRecipes'

class App extends Component {
  state = {
    folders,
    recipes
  }

  render() {

    return (
        <main className="App">
          <Header />
          <MainNav />
          <Switch>
            <Route
              exact path={'/'}
              component={MainBlurb} />

            <Route
              path={'/login'}
              component={LoginPage} />
            
            <Route
              path={'/register'}
              component={RegistrationPage} />
            
            <Route
              path={'/cookbook'}
              component={Cookbook} />
            
            <Route
              path={'/recipe/:recipeId'}
              render={routeProps => <RecipePage {...routeProps} />} />
            
            <Route
              path={'/add-recipe'}
              component={AddRecipe} />
            
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </main>
    )
  }
}

export default App