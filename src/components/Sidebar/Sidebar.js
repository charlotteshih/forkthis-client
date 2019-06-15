import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import AddFolder from '../AddFolder/AddFolder'
import FoldersList from '../FoldersList/FoldersList'
import './Sidebar.css'
import folders from '../../dummyData/dummyFolders';

class Sidebar extends Component {
  state = {
    folders
  }

  addFolder = folder => {
    console.log('add folder')
    this.setState({
      folders: [
        folder,
        ...this.state.folders
      ]
    })
  }

  render() {
    return (
      <Section className="sidebar">
        <h2>Folders</h2>
        <AddFolder
          addFolder={this.addFolder} />
        <FoldersList />
      </Section>
    )
  }
}

export default Sidebar