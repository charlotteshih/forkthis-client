import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import './FoldersList.css'

class FoldersList extends Component {
  static contextType = RecipeContext

  render() {
    const { folders, filterFolders } = this.context;

    return (
      <ul>
        <li className="folder-item" onClick={() => filterFolders(null)}>View All</li>
        {
          folders.map(folder => {
            return (
              <li
                className="folder-item"
                onClick={() => filterFolders(folder.id)}
                key={folder.id}
                value={folder.folderName}>
                {folder.folderName}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default FoldersList