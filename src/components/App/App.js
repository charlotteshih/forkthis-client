import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from '../Header/Header'
import MainNav from '../MainNav/MainNav'
import MainBlurb from '../MainBlurb/MainBlurb'
import Footer from '../Footer/Footer'

import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'

import PrivateRoute from '../Utils/PrivateRoute'
import Cookbook from '../../routes/Cookbook/Cookbook'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <MainNav />
        <Switch>
          <Route
            exact path={'/'}
            component={MainBlurb} />

          <PublicOnlyRoute
            path={'/login'}
            component={LoginPage} />

          <PublicOnlyRoute
            path={'/register'}
            component={RegistrationPage} />

          <PrivateRoute
            path={'/cookbook'}
            component={Cookbook} />
        </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;