import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import recipes from '../../dummyData/dummyRecipes'
import './RecipeCard.css'

class RecipeCard extends Component {
  state = {
    recipes
  }

  render() {
    return (
      <>
        {
          this.state.recipes.map(recipe => {
            return (
              <Section className="recipe-card" key={recipe.id}>
                <h3><Link to={`/recipe-page`}>{recipe.name}</Link></h3>
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