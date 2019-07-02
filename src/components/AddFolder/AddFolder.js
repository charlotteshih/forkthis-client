import React, { Component } from 'react'
import { Input, Button } from '../Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext'
import './AddFolder.css'
import '../Utils/Utils.css'

class AddFolder extends Component {
  static contextType = RecipeContext

  state = {
    folder_name: ''
  }

  handleChange = e => {
    this.setState({
      folder_name: e.target.value
    })
  }

  clearForm = () => {
    this.setState({
      folder_name: ''
    })
  }

  handleCreateNewFolder = e => {
    e.preventDefault()
    this.context.postNewFolder(this.state.folder_name.trim())
    this.clearForm()
  }

  render() {  
    return (
      <form
        className="add-folder"
        onSubmit={this.handleCreateNewFolder}>
        <Input
          value={this.state.folderName}
          onChange={this.handleChange}
          type="text"
          id="add_folder"
          name="add_folder"
          placeholder="Add Folder"
          required />
        <Button disabled={this.state.folder_name === ''} type="submit">Add</Button>
      </form>
    )
  }
}

export default AddFolder