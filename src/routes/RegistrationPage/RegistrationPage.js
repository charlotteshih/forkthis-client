import React, { Component } from 'react'
import { Section, Required } from '../../components/Utils/Utils'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className="registration-form">
        <h2>Create An Account</h2>
        <p><Required /> <i>All fields are required</i></p>
        <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess} />
      </Section>
    )
  }
}

export default RegistrationPage