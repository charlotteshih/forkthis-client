import React, { Component } from 'react'
import './Sidebar.css'

import AddFolder from '../AddFolder/AddFolder'
import FoldersList from '../FoldersList/FoldersList'

class Sidebar extends Component {
  render() {
    return (
      <>
        <h2>Folders</h2>
        <AddFolder />
        <FoldersList />
      </>
    )
  }
}

export default Sidebar