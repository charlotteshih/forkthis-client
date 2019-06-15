import React, { Component } from 'react'
import { Input, Button } from '../Utils/Utils'

class AddFolder extends Component {
  state = {
    folderName: ''
  }

  handleChange = e => {
    this.setState({
      folderName: e.target.value
    })
  }

  // clearForm = () => {
  //   this.setState({
  //     folderName: ''
  //   })
  // }

  handleCreateNewFolder = e => {
    e.preventDefault()
    console.log(this.state.folderName)
    this.props.addFolder(this.state)
    // this.clearForm()
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
        <Button type="submit">Add</Button>
      </form>
    )
  }
}

export default AddFolder