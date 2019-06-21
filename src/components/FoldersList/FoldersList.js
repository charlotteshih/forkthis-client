import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Button } from '../Utils/Utils'
import './FoldersList.css'

class FoldersList extends Component {
  static contextType = RecipeContext

  render() {
    const { folders, filterFolders } = this.context;

    return (
      <>
        <Button className="folder-item" onClick={() => filterFolders(null)}>View All</Button>
        {
          folders.map(folder => {
            return (
              <Button
                className="folder-item"
                onClick={() => filterFolders(folder.id)}
                key={folder.id}
                value={folder.folderName}>
                {folder.folderName}
              </Button>
            )
          })
        }
      </>
    )
  }
}

export default FoldersList