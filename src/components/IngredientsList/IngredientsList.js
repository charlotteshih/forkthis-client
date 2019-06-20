import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import './IngredientsList.css'

class IngredientsList extends Component {
  static contextType = RecipeContext

  render() {
    let recipeId = this.props.recipeId
    let recipe = this.context.recipes.filter(recipe => recipe.id === recipeId)[0]

    return (
      <ul>
        {recipe.ingredients.map(ing => {
            return (
              ing.item.length >= 1
              ? <li key={ing.id}>{ing.item}</li>
              : <li className="blank-li" key={ing.id}></li>
            )
          })}
      </ul>
    )
  }
}

export default IngredientsList