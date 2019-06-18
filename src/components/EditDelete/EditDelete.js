import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Section, Button } from '../Utils/Utils'
import './EditDelete.css'

class EditDelete extends Component {
  static contextType = RecipeContext

  handleDelete = e => {
    // e.preventDefault()
    console.log(e.target.class)
    this.context.recipes.filter(recipe => {
      return recipe.id !== e.target.id
    })
  }

  render() {
    return (
      <Section className="edit-delete">
        <Button
          className="edit-button">
          Edit
        </Button>
        <Button
          onClick={e => this.handleDelete(e)}
          className="delete-button">
          Delete
        </Button>
      </Section>
    )
  }
}

export default EditDelete