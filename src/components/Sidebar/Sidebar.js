import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import './Sidebar.css'

import AddFolder from '../AddFolder/AddFolder'
import FoldersList from '../FoldersList/FoldersList'

class Sidebar extends Component {
  render() {
    return (
      <Section className="sidebar">
        <h2>Folders</h2>
        <AddFolder />
        <FoldersList />
      </Section>
    )
  }
}

export default Sidebar