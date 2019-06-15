import React, { Component } from 'react'

const CookbookContext = React.createContext({
  cookbook: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCookbook: () => {}
})

export class CookbookProvider extends Component {
  state = {
    cookbook: [],
    error: null
  }

  setCookbook = cookbook => {
    this.setState({ cookbook })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      cookbook: this.state.cookbook,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCookbook: this.setCookbook
    }
    return (
      <CookbookContext.Provider value={value}>
        {this.props.children}
      </CookbookContext.Provider>
    )
  }
}

export default CookbookProvider