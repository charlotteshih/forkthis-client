import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext'
import './RecipeCard.css'

// import EditDelete from '../EditDelete/EditDelete'

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
                <h3><Link to={`recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                <p>By: {recipe.author.nickname}</p>
                <p>Folder: {recipe.folder.name}</p>
                {/* <EditDelete recipe={recipe} /> */}
              </Section>
            )
          })
        }
      </>
    )
  }
}

export default RecipeCard