import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'

import AuthApiService from '../../services/auth-api-service'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { register_username, register_password, register_nickname } = e.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: register_username.value,
      password: register_password.value,
      nickname: register_nickname.value
    })
      .then(user => {
        register_username.value = ''
        register_password.value = ''
        register_nickname.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="username">
            <label htmlFor="register_username">Username: </label>
            <Input
              type="text"
              id="register_username"
              name="username"
              required />
        </div>

        <div className="password">
            <label htmlFor="register_password">Password: </label>
            <Input
              type="password"
              id="register_password"
              name="register_password"
              required />
        </div>

        <div className="nickname">
            <label htmlFor="register_nickname">Nickname: </label>
            <Input
              type="text"
              id="register_nickname"
              name="register_nickname"
              required />
        </div>

        <Button type="submit">Create My Account</Button>
        <Button type="reset">Start Over</Button>
      </form>
    )
  }
}

export default RegistrationForm