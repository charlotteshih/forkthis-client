import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext'
import './Cookbook.css'

class Cookbook extends Component {
  static contextType = RecipeContext

  render() {
    return (
      <>
        {
          this.context.recipes.map(recipe => {
            return (
              <Section
                id={recipe.id}
                recipe={recipe}
                className="recipe-card"
                key={recipe.id}>
                <h3><Link to={`recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                <p>
                  Folder:&nbsp;
                  {this.context.folders
                      .filter(folder => folder.id === recipe.folder_id)
                      .map(folder => folder.folder_name)}
                </p>
              </Section>
            )
          })
        }
      </>
    )
  }
}

export default Cookbook