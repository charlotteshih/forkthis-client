import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext'
import './RecipeCard.css'

// import EditDelete from '../EditDelete/EditDelete'

class RecipeCard extends Component {
  static contextType = RecipeContext
  
  render() {
    // console.log('this.context', this.context)

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
                <p>
                  Folder:&nbsp;
                  {
                    this.context.folders
                      .filter(folder => folder.id === recipe.folder_id)
                      .map(folder => folder.folder_name)
                  }
                </p>
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