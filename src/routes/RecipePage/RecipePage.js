import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './RecipePage.css'
import RecipeContext from '../../contexts/RecipeContext'

import RecipeHeader from '../../components/RecipeHeader/RecipeHeader'
import BackButton from '../../components/BackButton/BackButton'
import IngredientsList from '../../components/IngredientsList/IngredientsList'
import StepsList from '../../components/StepsList/StepsList'

class RecipePage extends Component {
  static contextType = RecipeContext

  render() {
    let history = this.props.history
    let recipeId = parseInt(this.props.match.params.recipeId)
    let recipe = this.context.recipes.filter(recipe => recipe.id === recipeId)

    return (
      <>
        <BackButton history={history} />
        <RecipeHeader recipeId={recipeId} />
        <Section className="recipe-ingredients">
          <h2>Ingredients</h2>
          <IngredientsList recipeId={recipeId} />
        </Section>
        <Section className="recipe-steps">
          <h2>{recipe.title}</h2>
          <h2>Steps</h2>
          <StepsList recipeId={recipeId} />
        </Section>
      </>
    )
  }
}

export default RecipePage