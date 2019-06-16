import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import folders from '../../dummyData/dummyFolders'
import recipes from '../../dummyData/dummyRecipes'
import './FoldersList.css'

class FoldersList extends Component {
  static contextType = RecipeContext

  state = {
    folders
  }

  filterFolders = e => {
    return recipes.filter(item => e.target.id === item.folder_id)
  }

  render() {
    return (
      <RecipeContext.Consumer>
        <ul>
          <li className="folder-item">View All</li>
          {
            this.state.folders.map(folder => {
              return (
                <li
                  className="folder-item"
                  onClick={this.filterFolders}
                  key={folder.id}
                  id={folder.id}
                  value={folder.folderName}>
                  {folder.folderName}
                </li>
              )
            })
          }
        </ul>
      </RecipeContext.Consumer>
    )
  }
}

export default FoldersList