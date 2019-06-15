import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import IngredientsList from '../../components/IngredientsList/IngredientsList'
import StepsList from '../../components/StepsList/StepsList'
import '../Cookbook/Cookbook.css'
import './RecipePage.css'

class RecipePage extends Component {
  render() {
    return (
      <Section className="cookbook">
        <Section className="recipe-ingredients">
          <h2>Ingredients</h2>
          <IngredientsList />
        </Section>
        <Section className="recipe-steps">
          <h2>Steps</h2>
          <StepsList />
        </Section>
      </Section>
    )
  }
}

export default RecipePage