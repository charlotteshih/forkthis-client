import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './RecipeHeader.css'
import RecipeContext from '../../contexts/RecipeContext'

class RecipePage extends Component {
  static contextType = RecipeContext

  render() {
    return (
      <Section className="recipe-header">
        <h2>{this.context.recipes
          .filter(recipe => recipe.id === this.props.recipeId)
          .map(recipe => recipe.title)}</h2>
      </Section>
    )
  }
}

export default RecipePage