import React from 'react'
import { Section } from '../../components/Utils/Utils'
import '../Cookbook/Cookbook.css'
import './RecipePage.css'

import BackButton from '../../components/BackButton/BackButton'
import IngredientsList from '../../components/IngredientsList/IngredientsList'
import StepsList from '../../components/StepsList/StepsList'

import recipes from '../../dummyData/dummyRecipes'

function RecipePage(props) {
  let history = props.history
  let recipeId = props.match.params.recipeId

  return (
    <Section className="cookbook">
      <Section className="recipe-ingredients">
        <h2>Ingredients</h2>
        <IngredientsList recipeId={recipeId} />
      </Section>
      <Section className="recipe-steps">
        <BackButton history={history} />
        <h2>{recipes[recipeId -1].name}</h2>
        <h2>Steps</h2>
        <StepsList recipeId={recipeId} />
      </Section>
    </Section>
  )
}

export default RecipePage