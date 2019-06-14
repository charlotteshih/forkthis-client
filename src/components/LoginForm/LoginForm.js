import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { login_username, login_password } = e.target

    AuthApiService.postLogin({
      username: login_username.value,
      password: login_password.value
    })
      .then(res => {
        login_username.value = ''
        login_password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="username">
            <label htmlFor="login_username">Username: </label>
            <Input
              type="text"
              id="login_username"
              name="login_username"
              required />
        </div>

        <div className="password">
            <label htmlFor="login_password">Password: </label>
            <Input
              type="password"
              id="login_password"
              name="login_password"
              required />
        </div>

        <Button type="submit">Login</Button>
      </form>
    )
  }
}

export default LoginForm