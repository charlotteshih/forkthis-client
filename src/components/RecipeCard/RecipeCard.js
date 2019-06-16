import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import './RecipeCard.css'
import RecipeContext from '../../contexts/RecipeContext';

class RecipeCard extends Component {
  static contextType = RecipeContext

  render() {
    return (
      <>
        {
          this.context.recipes.map(recipe => {
            return (
              <Section
                recipe={recipe}
                className="recipe-card"
                key={recipe.id}>
                <h3><Link to={`recipe/${recipe.id}`}>{recipe.name}</Link></h3>
                <p>Folder: {recipe.folder_id}</p>
              </Section>
            )
          })
        }
      </>
    )
  }
}

export default RecipeCard