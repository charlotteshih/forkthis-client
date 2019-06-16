import React, { Component } from 'react'
import { Input, Button } from '../Utils/Utils'
import RecipeContext from '../../contexts/RecipeContext';

class AddFolder extends Component {
  static contextType = RecipeContext

  state = {
    folderName: ''
  }

  handleChange = e => {
    this.setState({
      folderName: e.target.value
    })
  }

  clearForm = () => {
    this.setState({
      folderName: ''
    })
  }

  handleCreateNewFolder = e => {
    e.preventDefault()
    console.log(this.state.folderName.trim())
    this.context.addNewFolder(this.state.folderName.trim())
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
        <Button disabled={this.state.folderName === ''} type="submit">Add</Button>
      </form>
    )
  }
}

export default AddFolder