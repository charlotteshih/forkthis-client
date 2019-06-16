import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import IngredientsList from '../../components/IngredientsList/IngredientsList'
import StepsList from '../../components/StepsList/StepsList'
import '../Cookbook/Cookbook.css'
import './RecipePage.css'
import recipes from '../../dummyData/dummyRecipes'

function RecipePage(props) {
  let recipeId = props.match.params.recipeId

  return (
    <Section className="cookbook">
      <Section className="recipe-ingredients">
        <Link to="/cookbook">&larr; Back</Link>
        <h2>Ingredients</h2>
        <IngredientsList recipeId={recipeId} />
      </Section>
      <Section className="recipe-steps">
        <h2>{recipes[recipeId -1].name}</h2>
        <h2>Steps</h2>
        <StepsList recipeId={recipeId} />
      </Section>
    </Section>
  )
}

export default RecipePage