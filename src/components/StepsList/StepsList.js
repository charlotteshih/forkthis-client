import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import '../IngredientsList/IngredientsList.css'
import config from '../../config'

class StepsList extends Component {
  static contextType = RecipeContext
  state = {
    steps: []
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT + `/steps/${this.props.recipeId}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          steps: responseJson
        })
      })
  }

  render() {
    return (
      <ol>
        {this.state.steps.map(step => {
            return (
              step.step.length > 1
              ? <li key={step.id}>{step.step}</li>
              : <li className="blank-li" key={step.id}></li>
            )
          })}
      </ol>
    )
  }
}

export default StepsList