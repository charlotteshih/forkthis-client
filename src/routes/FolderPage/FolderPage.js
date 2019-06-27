import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
import './FolderPage.css'
import RecipeContext from '../../contexts/RecipeContext'

// import EditDelete from '../EditDelete/EditDelete'

class FolderPage extends Component {
  static contextType = RecipeContext

  render() {
    let folderId = parseInt(this.props.match.params.folderId)

    let showFolderName = () => this.context.folders
    .filter(folder => folder.id === folderId)
    .map(folder => {
      return <h2 key={folderId}>{folder.folder_name}</h2>
    })
    
    let showRecipes = recipes => {
      return recipes
        .filter(recipe => recipe.folder_id === folderId)
        .map(recipe => {
          return (
            <Section
              id={recipe.id}
              recipe={recipe}
              className="recipe-card"
              key={recipe.id}>
              <h3><Link to={`../recipe/${recipe.id}`}>{recipe.title}</Link></h3>
              <p>
                  Folder:&nbsp;
                  {this.context.folders
                      .filter(folder => folder.id === recipe.folder_id)
                      .map(folder => folder.folder_name)}
              </p>
              {/* <EditDelete recipe={recipe} /> */}
            </Section>
          )
        })
    }
    return (
      <>
        {showFolderName()}
        {showRecipes(this.context.recipes)}
      </>
    )
  }
}

export default FolderPage