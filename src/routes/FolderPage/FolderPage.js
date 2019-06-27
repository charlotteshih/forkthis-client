import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Section } from '../../components/Utils/Utils'
import './FolderPage.css'
import RecipeContext from '../../contexts/RecipeContext'

import Sidebar from '../../components/Sidebar/Sidebar'
import RecipeList from '../../components/RecipeList/RecipeList'

class FolderPage extends Component {
  static contextType = RecipeContext

  render() {
    // const folderId = parseInt(this.props.match.params.folderId)
    return (
      <>
        <h2>Your Cookbook</h2>
          <Sidebar />
          <RecipeList />
      </>
    )
  }
}

export default FolderPage