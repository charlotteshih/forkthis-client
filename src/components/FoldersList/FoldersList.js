import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Button } from '../Utils/Utils'
import './FoldersList.css'

class FoldersList extends Component {
  static contextType = RecipeContext

  render() {
    // const { folders, filterFolders } = this.context

    return (
      <>
        <Button
          // onClick={() => this.context.filterFolders(null)}
          className="folder-item">
          View All
        </Button>
        {
          this.context.folders.map(folder => {
            return (
              <Button
                // onClick={() => this.context.filterFolders(folder.id)}
                className="folder-item"
                key={folder.id}
                value={folder.folder_name}>
                {folder.folder_name}
              </Button>
            )
          })
        }
      </>
    )
  }
}

export default FoldersList