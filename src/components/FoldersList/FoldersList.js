import React, { Component } from 'react'
import folders from '../../dummyData/dummyFolders'
import './FoldersList.css'

class FoldersList extends Component {
  state = {
    folders
  }

  filterFolders = e => {
    console.log(e.target.key)
  }

  render() {
    return (
      <ul>
        <li className="folder-item" onClick={this.filterFolders}>View All</li>
        {
          this.state.folders.map(folder => {
            return (
              <li
                className="folder-item"
                onClick={this.filterFolders}
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