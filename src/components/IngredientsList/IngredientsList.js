import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import './IngredientsList.css'
import config from '../../config'

class IngredientsList extends Component {
  static contextType = RecipeContext

  state = {
    ingredients: []
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT + `/recipes/${this.props.recipeId}/ingredients`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          ingredients: responseJson
        })
      })
  }

  render() {
    return (
      <ul>
        {this.state.ingredients.map(ing => {
            return (
              ing.item.length >= 1
              ? <li key={ing.id}>{ing.quantity + ' '}{ing.unit + ' '}{ing.item}</li>
              : <li className="blank-li" key={ing.id}></li>
            )
          })}
      </ul>
    )
  }
}

export default IngredientsList