import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './LoginPage.css'

import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/cookbook'
    history.push(destination)
  }

  render() {
    return (
      <Section className="login-form">
        <h2>Log In</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    )
  }
}

export default LoginPage