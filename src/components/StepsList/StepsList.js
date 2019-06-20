import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import '../IngredientsList/IngredientsList.css'
// import recipes from '../../dummyData/dummyRecipes'

class StepsList extends Component {
  static contextType = RecipeContext

  render() {
    let recipeId = this.props.recipeId
    let recipe = this.context.recipes.filter(recipe => recipe.id === recipeId)[0]
    return (
      <ol>
        {recipe.steps.map(step => {
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