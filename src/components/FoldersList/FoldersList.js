import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Link } from 'react-router-dom'
import './FoldersList.css'

class FoldersList extends Component {
  static contextType = RecipeContext

  render() {
    return (
      <>
        <Link
          to="/"
          className="folder-item">
          View All
        </Link>
        {this.context.folders.map(folder => {
            return (
              <Link
                to={`/folder/${folder.id}`}
                className="folder-item"
                key={folder.id}
                value={folder.folder_name}>
                {folder.folder_name}
              </Link>
            )
          })}
      </>
    )
  }
}

export default FoldersList