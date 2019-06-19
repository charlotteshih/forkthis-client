import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import { Section, Button } from '../Utils/Utils'
import './EditDelete.css'

class EditDelete extends Component {
  static contextType = RecipeContext

  handleDelete = recipeId => {
    console.log(recipeId)
    this.setState({
      recipes: [
        this.context.recipes.filter(recipe => recipe.id !== recipeId)
      ]
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
          onClick={() => this.handleDelete(this.props.recipe.id)}
          className="delete-button">
          Delete
        </Button>
      </Section>
    )
  }
}

export default EditDelete